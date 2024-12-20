import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";


import { image } from "../../constants";
import FormField from "../../components/FormField";

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image source={image.logo} resizeMode="contain" className="w-[115px] h-[35px]" />
          <Text className="text-2xl text-white font-semibold mt-10  font-rwsemibold">Log in to Aora</Text>
          <FormField title="Email" value={form.email} handleChangeText={(e) => setForm({
            ...form,
            email: e
          })} otherStyles="mt-7" keyboardType="email-address" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
