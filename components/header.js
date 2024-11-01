<<<<<<< HEAD
import { Box, Image, HStack, Heading } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
=======
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Box, HStack, Image, Heading } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
>>>>>>> 5cd3bc2aa1948a363a01a45369757b7570dd0d12

const Header = ({ title, withBack = false }) => {
  const trueGray900 = "#171717";
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar barStyle="light" backgroundColor={trueGray900} />
<<<<<<< HEAD
      <Box bg="$trueGray900" p="$4">
=======
      <Box bg={"trueGray.900"} p={"4"}>
>>>>>>> 5cd3bc2aa1948a363a01a45369757b7570dd0d12
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
            {!withBack ? (
              <>
                <Image
                  source={require("../assets/cnn.png")}
<<<<<<< HEAD
                  w="$12"
                  h="$12"
                  alt="CNN Logo"
                  mr={"$3"}
=======
                  w="12"
                  h="12"
                  alt="CNN Logo"
                  mr={"3"}
>>>>>>> 5cd3bc2aa1948a363a01a45369757b7570dd0d12
                />
              </>
            ) : (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
<<<<<<< HEAD
                <Box mr={"$3"}>
=======
                <Box mr={"3"}>
>>>>>>> 5cd3bc2aa1948a363a01a45369757b7570dd0d12
                  <Ionicons name="arrow-back-outline" size={32} color="white" />
                </Box>
              </TouchableOpacity>
            )}
<<<<<<< HEAD
            <Heading color={"$white"}>{title}</Heading>
=======
            <Heading color={"white"}>{title}</Heading>
>>>>>>> 5cd3bc2aa1948a363a01a45369757b7570dd0d12
          </HStack>

          <HStack space={"2xl"}>
            <Image
              source={require("../assets/facebook.png")}
<<<<<<< HEAD
              w="$5"
              h="$5"
=======
              w="5"
              h="5"
>>>>>>> 5cd3bc2aa1948a363a01a45369757b7570dd0d12
              alt="Facebook Icon"
            />
            <Image
              source={require("../assets/youtube.png")}
<<<<<<< HEAD
              w="$5"
              h="$5"
=======
              w="5"
              h="5"
>>>>>>> 5cd3bc2aa1948a363a01a45369757b7570dd0d12
              alt="Facebook Icon"
            />
            <Image
              source={require("../assets/twitter.png")}
<<<<<<< HEAD
              w="$5"
              h="$5"
=======
              w="5"
              h="5"
>>>>>>> 5cd3bc2aa1948a363a01a45369757b7570dd0d12
              alt="Facebook Icon"
            />
            <Image
              source={require("../assets/search.png")}
<<<<<<< HEAD
              w="$5"
              h="$5"
=======
              w="5"
              h="5"
>>>>>>> 5cd3bc2aa1948a363a01a45369757b7570dd0d12
              alt="Search Icon"
            />
          </HStack>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

<<<<<<< HEAD
export default Header;

=======
export default Header;
>>>>>>> 5cd3bc2aa1948a363a01a45369757b7570dd0d12
