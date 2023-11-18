# revmixerhw4

RevMixer application using React Native.

# Set up:

1. Clone the repository: 
```zsh
git clone https://github.com/C-h-ris-2/revmixerhw4.git

```
2. If you are trying to run this on mac, you need to go to all of the screens in the frontend repo and remove "8080:" from the axios statements

3. Create a database named "hw_user2", and create two tables:
  ```zsh
CREATE TABLE users (username VARCHAR(255), password VARCHAR(255))
CREATE TABLE ratings (id INT(11) PRIMARY KEY AUTO_INCREMENT, username VARCHAR(255), artist VARCHAR(255), song VARCHAR(255), rating INT(1))
```
6. Turn on xampp localhost and use the MVC from homework 3 we provided

7. Install following libraries:
```zsh
npm i @expo/cli
npm i @react-native-async-storage/async-storage
npm i react-native-ratings
npm i @react-navigation/native-stack
npm i @react-navigation/native
```

6. cd Into directory and start the application:
```zsh
cd revmixerhw4
npm install
npm expo start
```

7. Run on the emulator!
# Contributions:
- Cristi Gonzalez: 50%
- Christian Diaz Herrera: 50%


