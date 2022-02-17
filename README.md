# Sorting Visualiser:

This project was designed to visualise some sorting algorithms in an intuitive and interactive way. It was built with React js and MUI for icons and controllers, and based on the work of Clement Mihaleiscu. 


## Project Structure:

```

.
├── App.js      //React component of sorting application in itself
├── MainApp.js  //React componenet of sorting application, tutorial box, and welcome box 
├── index.js
├── others
│   ├── index.css
│   ├── reportWebVitals.js
│   └── setupTests.js
└── visualiser
    |
    ├── components //Here we have all the UI components and layout
    │   ├── Canvas.js
    │   ├── InformationBox.js
    │   ├── Welcome.js
    │   ├── buttons
    │   │   ├── FunctionsButtons.js
    │   │   ├── ShuffleButton.js
    │   │   └── SortButton.js
    │   ├── radioBox
    │   │   └── AlgorithmSelector.js
    │   ├── sliders
    │   │   ├── SliderAnimationSpeed.js
    │   │   └── SliderNumberBars.js
    │   └── tutorial
    │       ├── AlgorithmSelectorExplanation.js
    │       ├── FunctionButtonTutorial.js
    │       ├── InformationBoxExplanation.js
    │       ├── SlidersExplanation.js
    │       └── Tutorial.js
    |
    └── model //Here we have all the functionality behind the UI
        ├── algorithms
        │   ├── SortingAlgorithm.js
        │   ├── bubbleSort.js
        │   ├── heapSort.js
        │   ├── insertionSort.js
        │   ├── mergeSort.js
        │   ├── quickSort.js
        │   ├── radixSort.js
        │   └── selectionSort.js
        ├── animations
        │   └── AnimationsEngine.js
        └── utils.js

```
