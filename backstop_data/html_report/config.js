report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Original_page_0_document_0_notebook.png",
        "test": "../bitmaps_test/20180307-015156/backstop_default_Original_page_0_document_0_notebook.png",
        "selector": "document",
        "fileName": "backstop_default_Original_page_0_document_0_notebook.png",
        "label": "Original page",
        "misMatchThreshold": 0.1,
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "18.90",
          "analysisTime": 161
        },
        "diffImage": "../bitmaps_test/20180307-015156/failed_diff_backstop_default_Original_page_0_document_0_notebook.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});