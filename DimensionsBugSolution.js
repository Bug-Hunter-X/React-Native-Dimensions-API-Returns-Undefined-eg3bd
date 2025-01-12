```javascript
import React, { useEffect, useState } from 'react';
import { Dimensions, View, StyleSheet, LayoutAnimation } from 'react-native';

const DimensionsBugSolution = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', (newDimensions) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setDimensions(newDimensions.window);
    });

    return () => subscription?.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.box, { width: dimensions.width / 2, height: dimensions.height / 2 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: 'blue',
  },
});

export default DimensionsBugSolution;
```