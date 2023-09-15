{
  "config": {
    "configFile": "E:\\Devs\\Testing\\Learn-Playwright\\playwright.config.ts",
    "rootDir": "E:/Devs/Testing/Learn-Playwright",
    "forbidOnly": false,
    "fullyParallel": false,
    "globalSetup": null,
    "globalTeardown": null,
    "globalTimeout": 0,
    "grep": {},
    "grepInvert": null,
    "maxFailures": 0,
    "metadata": {
      "actualWorkers": 1,
      "totalTime": 31535.652
    },
    "preserveOutput": "always",
    "reporter": [
      [
        "dot",
        null
      ],
      [
        "json",
        {
          "outputFile": "jsonReport/jsonReport.js"
        }
      ],
      [
        "html",
        {
          "open": "never"
        }
      ]
    ],
    "reportSlowTests": {
      "max": 5,
      "threshold": 15000
    },
    "quiet": false,
    "projects": [
      {
        "outputDir": "E:/Devs/Testing/Learn-Playwright/test-results",
        "repeatEach": 1,
        "retries": 0,
        "id": "",
        "name": "",
        "testDir": "E:/Devs/Testing/Learn-Playwright",
        "testIgnore": [],
        "testMatch": [
          "tests/recorded.test.ts"
        ],
        "timeout": 30000
      }
    ],
    "shard": null,
    "updateSnapshots": "missing",
    "version": "1.37.1",
    "workers": 4,
    "webServer": null
  },
  "suites": [
    {
      "title": "tests\\recorded.test.ts",
      "file": "tests/recorded.test.ts",
      "column": 0,
      "line": 0,
      "specs": [
        {
          "title": "test",
          "ok": false,
          "tags": [],
          "tests": [
            {
              "timeout": 30000,
              "annotations": [],
              "expectedStatus": "passed",
              "projectId": "",
              "projectName": "",
              "results": [
                {
                  "workerIndex": 0,
                  "status": "timedOut",
                  "duration": 30001,
                  "error": {
                    "message": "\u001b[31mTest timeout of 30000ms exceeded.\u001b[39m"
                  },
                  "errors": [
                    {
                      "message": "\u001b[31mTest timeout of 30000ms exceeded.\u001b[39m"
                    },
                    {
                      "location": {
                        "file": "E:\\Devs\\Testing\\Learn-Playwright\\tests\\recorded.test.ts",
                        "column": 57,
                        "line": 23
                      },
                      "message": "Error: locator.click: Target closed\n=========================== logs ===========================\nwaiting for getByRole('button', { name: 'Continue1' })\n============================================================\n\n\u001b[0m \u001b[90m 21 |\u001b[39m   \u001b[36mawait\u001b[39m page\u001b[33m.\u001b[39mgetByPlaceholder(\u001b[32m'Telephone'\u001b[39m)\u001b[33m.\u001b[39mclick()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 22 |\u001b[39m   \u001b[36mawait\u001b[39m page\u001b[33m.\u001b[39mgetByPlaceholder(\u001b[32m'Telephone'\u001b[39m)\u001b[33m.\u001b[39mfill(\u001b[32m'2345737891'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 23 |\u001b[39m   \u001b[36mawait\u001b[39m page\u001b[33m.\u001b[39mgetByRole(\u001b[32m'button'\u001b[39m\u001b[33m,\u001b[39m { name\u001b[33m:\u001b[39m \u001b[32m'Continue1'\u001b[39m })\u001b[33m.\u001b[39mclick()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                                         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 24 |\u001b[39m   \u001b[36mawait\u001b[39m page\u001b[33m.\u001b[39mhover(\u001b[0m\n\u001b[0m \u001b[90m 25 |\u001b[39m     \u001b[32m\"//a[@data-toggle='dropdown']//span[contains(., 'My account')]\"\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 |\u001b[39m   )\u001b[33m;\u001b[39m\u001b[0m\n\n\u001b[2m    at E:\\Devs\\Testing\\Learn-Playwright\\tests\\recorded.test.ts:23:57\u001b[22m"
                    },
                    {
                      "message": "Pending operations:\n  - locator.click at tests\\recorded.test.ts:23:57\n"
                    }
                  ],
                  "stdout": [],
                  "stderr": [],
                  "retry": 0,
                  "startTime": "2023-09-15T16:58:14.642Z",
                  "attachments": [
                    {
                      "name": "video",
                      "contentType": "video/webm",
                      "path": "E:\\Devs\\Testing\\Learn-Playwright\\test-results\\tests-recorded-test\\video.webm"
                    },
                    {
                      "name": "screenshot",
                      "contentType": "image/png",
                      "path": "E:\\Devs\\Testing\\Learn-Playwright\\test-results\\tests-recorded-test\\test-failed-1.png"
                    }
                  ]
                }
              ],
              "status": "unexpected"
            }
          ],
          "id": "aeb89487b60598200775-764e062666c472cf22f2",
          "file": "tests/recorded.test.ts",
          "line": 3,
          "column": 5
        }
      ]
    }
  ],
  "errors": []
}