# CalgaryHacks2022

Dev Dependencies:

1. Input secret Google API Key (given in Discord)
   GoogleMap.js (`app/src/components/GoogleMap.js`)

```js
destination={coordinates[1]}
apikey={'<API_KEY>'} // insert your API Key here
strokeWidth={4}
```

    AndroidManifest.xml (`app/android/app/src/main/AndroidManifest.xml`)

```js
</activity>
<meta-data android:name="com.google.android.geo.API_KEY" android:value="<API_KEY>"/>
<uses-library android:name="org.apache.http.legacy" android:required="false"/>
```

2. `npm i react-native-maps react-native-webview react-native-maps-directions`
3. `npx react-native link react-native-maps`
