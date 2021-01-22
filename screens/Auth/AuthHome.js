import React from "react";
import styled from "styled-components";
import { Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import constants from "../../constants";
import AuthButton from "../../components/AuthButton";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Touchable = styled.TouchableOpacity``;

const LoginLink = styled.View``;
const LoginLinkText = styled.Text`
  color: ${(props) => props.theme.blueColor};
  margin-top: 20px;
  font-weight: 600;
`;

const styles = StyleSheet.create({
  logo: {
    width: constants.width / 2.5,
    height: 50,
    marginBottom: 35,
  },
});

export default ({ navigation }) => (
  <View>
    <Image style={styles.logo} source={require("../../assets/logo.png")} />
    <AuthButton
      text={"Create New Account"}
      onPress={() => navigation.navigate("Signup")}
    />
    <Touchable onPress={() => navigation.navigate("Login")}>
      <LoginLink>
        <LoginLinkText>Login</LoginLinkText>
      </LoginLink>
    </Touchable>
  </View>
);
