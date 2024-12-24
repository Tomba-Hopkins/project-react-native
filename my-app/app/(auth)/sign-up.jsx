import { View, Text, ScrollView, Image } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from 'expo-router'
import { image } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";


const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSubmiting, setIsSubmiting] = useState(false)

  const submit = () => {

  }


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
          <Image source={image.logo} resizeMode="contain" className="w-[115px] h-[35px]" />
          <Text className="text-2xl text-white font-semibold mt-10  font-rwsemibold">Sign Up to Aora</Text>


          <FormField title="Username" value={form.username} handleChangeText={(e) => setForm({
            ...form,
            username: e
          })} otherStyles="mt-10" />


          <FormField title="Email" value={form.email} handleChangeText={(e) => setForm({
            ...form,
            email: e
          })} otherStyles="mt-7" keyboardType="email-address" />



          <FormField title="Password" value={form.password} handleChangeText={(e) => setForm({
            ...form,
            password: e
          })} otherStyles="mt-7" keyboardType="email-address" />

          <CustomButton isLoading={isSubmiting} containerStyles="mt-7" title="Sign-In" handlePress={submit} />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-rwregular">
              Have an account already?
            </Text>
            <Link href="/sign-in" className="text-lg font-rwsemibold text-secondary">Sign in</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;


