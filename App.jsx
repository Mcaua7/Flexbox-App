import { Text, View } from 'react-native';
import styles from './styles';

export default function App() {

  return (
    <View style={styles.container}>

      <View style={styles.leftView}>
        <View style={styles.boxBottomLeft}></View>
        <View style={styles.boxMiddleLeft}></View>
        <View style={styles.boxTopLeft}></View>
      </View>

      <View style={styles.rightView}>
        <View style={styles.boxBottomRight}></View>
        <View style={styles.boxMiddleRight}>
          <View style={styles.boxText}>
            <Text style={styles.textStyle}>FLEXBOX</Text>
          </View>
        </View>
        <View style={styles.boxTopRight}></View>
      </View>

    </View>
  );
}

