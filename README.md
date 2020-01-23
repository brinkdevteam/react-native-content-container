# react-native-content-container

A wrapper for SafeAreaView and other helper components to the content of a react-native application.

## Installing

```
npm install --save @brinkdevteam/react-native-content-container
```

## Motivation

Since child elements in react-native cannot override their parenting container, the Content component is designed to be used as a direct parent to the content. In other words, once a container restricts its children (by adding padding or margin), all children cannot escape their parent's restrictions. Since the Content component is restrictive, it should be used at the last second to buckle up the children and restrict them from going off the screen.

Any parts of the view (such as a hamburger menu button) which are not a part of the main content component hierarchy may use their own restrictions to prevent them from going off screen. For example, a back arrow at the top of the screen may contain itself directly with the SafeAreaView component provided by react-native.

## Usage

```js
import { Text } from "react-native";
import { ContentSafeArea } from "@brinkdevteam/react-native-content-container";

const MyScreen = () => {
  return (
    <>
      <SafeAreaView>
        <Text>My Header</Text>
      </SafeAreaView>
      <Content>
        <Text>Hello!</Text>
      </Content>
    </>
  );
};
```
