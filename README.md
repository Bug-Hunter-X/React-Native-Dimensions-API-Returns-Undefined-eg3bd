# React Native Dimensions API Returns Undefined

This repository demonstrates a common error encountered when using the `Dimensions` API in React Native to retrieve screen dimensions.  The issue arises when attempting to access the dimensions before the component has fully mounted or before the API has updated its values. This often leads to `undefined` values, causing unexpected behavior or application crashes.

The `DimensionsBug.js` file showcases the problematic code, while `DimensionsBugSolution.js` provides a solution using `useEffect` and `LayoutAnimation` to ensure the dimensions are properly fetched before use.