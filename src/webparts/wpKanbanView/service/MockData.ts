class MockData {
    public static getTaskStatus =
        {
            "odata.metadata": "https://mp2018devops.sharepoint.com/sites/Met_6/ProjectRoom/_api/$metadata#SP.ApiData.Fields/@Element&$select=Choices",
            "odata.type": "SP.FieldChoice",
            "odata.id": "https://mp2018devops.sharepoint.com/sites/Met_6/ProjectRoom/_api/Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Fields(guid'c15b34c3-ce7d-490a-b133-3f4de8801b76')",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Fields(guid'c15b34c3-ce7d-490a-b133-3f4de8801b76')",
            "Choices": [
                "Not Started",
                "In Progress",
                "Completed",
                "Deferred",
                "Waiting on someone else"
            ]
        };

    public static getTaskListItems = [
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "d88518f4-772e-48e4-8d73-3a67db583f4b",
            "odata.etag": "\"28\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(1)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(1)/AssignedTo",
            "AssignedTo": [
                {
                    "odata.type": "SP.Data.UserInfoItem",
                    "odata.id": "4e32edf2-2921-48dd-bc13-f170d1956a18",
                    "Id": 21,
                    "Title": "Henrik Tveit"
                }
            ],
            "Id": 1,
            "ID": 1,
            "Title": "Hei",
            "Status": "Not Started",
            "Body": "<p>​<span style=\"color&#58;#000000;font-family&#58;&quot;open sans&quot;, arial, sans-serif;font-size&#58;14px;text-align&#58;justify;background-color&#58;#ffffff;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac tortor nec erat consequat placerat. Sed pretium elit at rutrum ullamcorper.&#160;</span>​<br></p>",
            "StartDate": null,
            "DueDate": null,
            "metKanbanOrder": 1
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "027d2ec6-7bd5-47af-970a-a62f84123d24",
            "odata.etag": "\"27\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(9)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(9)/AssignedTo",
            "Id": 9,
            "ID": 9,
            "Title": "Action task 2",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null,
            "metKanbanOrder": 2
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "e6dc7e33-f424-4e88-b531-d3dc78d41514",
            "odata.etag": "\"12\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(11)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(11)/AssignedTo",
            "AssignedTo": [
                {
                    "odata.type": "SP.Data.UserInfoItem",
                    "odata.id": "f8db03c3-4ca6-4180-9422-82c2f011e4d1",
                    "Id": 19,
                    "Title": "Nizam Uddin"
                }
            ],
            "Id": 11,
            "ID": 11,
            "Title": "action task2",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null,
            "metKanbanOrder": 3
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "492b5310-a87d-49bf-99ee-38b94e32bcb1",
            "odata.etag": "\"6\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(12)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(12)/AssignedTo",
            "AssignedTo": [
                {
                    "odata.type": "SP.Data.UserInfoItem",
                    "odata.id": "49c46002-9a16-4da3-876a-1f3b169aff3f",
                    "Id": 19,
                    "Title": "Nizam Uddin"
                }
            ],
            "Id": 12,
            "ID": 12,
            "Title": "test11",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null,
            "metKanbanOrder": 4
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "6bcdd41b-b8e9-4cfd-acf8-c451cdf3f88c",
            "odata.etag": "\"6\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(13)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(13)/AssignedTo",
            "AssignedTo": [
                {
                    "odata.type": "SP.Data.UserInfoItem",
                    "odata.id": "842ad855-5fe7-45f3-acfe-2c75320f6c04",
                    "Id": 19,
                    "Title": "Nizam Uddin"
                }
            ],
            "Id": 13,
            "ID": 13,
            "Title": "test name",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null,
            "metKanbanOrder": 5
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "4d93dbac-8485-44f3-bafd-64e11af5c10e",
            "odata.etag": "\"7\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(29)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(29)/AssignedTo",
            "AssignedTo": [
                {
                    "odata.type": "SP.Data.UserInfoItem",
                    "odata.id": "f5606694-7fd4-4c12-b406-dc635ce7f844",
                    "Id": 29,
                    "Title": "Shafiqul Murad"
                }
            ],
            "Id": 29,
            "ID": 29,
            "Title": "fsdfsd",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "c8f303d9-44d1-4883-81bf-aa97b907d44c",
            "odata.etag": "\"3\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(36)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(36)/AssignedTo",
            "AssignedTo": [
                {
                    "odata.type": "SP.Data.UserInfoItem",
                    "odata.id": "5fa7b308-0baa-4bcd-a3f2-bf5e40c8c342",
                    "Id": 18,
                    "Title": "Rakibul Alam Tanvi"
                }
            ],
            "Id": 36,
            "ID": 36,
            "Title": "test3",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "9cd61dcb-2d64-4ae6-a6ce-0107bab4e8b8",
            "odata.etag": "\"5\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(37)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(37)/AssignedTo",
            "AssignedTo": [
                {
                    "odata.type": "SP.Data.UserInfoItem",
                    "odata.id": "c2f793a7-270c-40ac-b4a5-5e8316a9d4e9",
                    "Id": 18,
                    "Title": "Rakibul Alam Tanvi"
                }
            ],
            "Id": 37,
            "ID": 37,
            "Title": "test4",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "cc5691fd-016b-469e-ad67-a0f7eb63ee09",
            "odata.etag": "\"4\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(38)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(38)/AssignedTo",
            "AssignedTo": [
                {
                    "odata.type": "SP.Data.UserInfoItem",
                    "odata.id": "2539deb6-e7a2-4835-b742-351b70a64164",
                    "Id": 19,
                    "Title": "Nizam Uddin"
                }
            ],
            "Id": 38,
            "ID": 38,
            "Title": "test DG4",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "03ad6c18-9d13-4a0a-acaf-0e0839a86e74",
            "odata.etag": "\"4\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(41)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(41)/AssignedTo",
            "Id": 41,
            "ID": 41,
            "Title": "Test Task 01",
            "Status": "Not Started",
            "Body": "<p>​test<br></p>",
            "StartDate": null,
            "DueDate": "2019-02-27T23:00:00Z"
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "02844f74-917e-4041-bd83-d18f6a076060",
            "odata.etag": "\"2\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(42)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(42)/AssignedTo",
            "Id": 42,
            "ID": 42,
            "Title": "Test Task 02",
            "Status": "Not Started",
            "Body": "<p>Test Task 02 Desc<br></p>",
            "StartDate": null,
            "DueDate": "2019-03-21T23:00:00Z"
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "47001166-9a86-4367-aa96-f2fe6e549b86",
            "odata.etag": "\"5\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(43)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(43)/AssignedTo",
            "AssignedTo": [
                {
                    "odata.type": "SP.Data.UserInfoItem",
                    "odata.id": "a176ca8d-18b1-4463-a2e9-a64b15fcd0b4",
                    "Id": 21,
                    "Title": "Henrik Tveit"
                }
            ],
            "Id": 43,
            "ID": 43,
            "Title": "Test Task 01 FOR HM",
            "Status": "Not Started",
            "Body": "<p>​Test Task 01 FOR HM​<br></p>",
            "StartDate": null,
            "DueDate": "2019-02-25T23:00:00Z"
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "4d98752f-f0c5-4539-9390-9efbfd8db274",
            "odata.etag": "\"12\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(44)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(44)/AssignedTo",
            "AssignedTo": [
                {
                    "odata.type": "SP.Data.UserInfoItem",
                    "odata.id": "04bef2b7-606d-4e84-8fc7-31e35f7a7425",
                    "Id": 27,
                    "Title": "Line Andorsen"
                }
            ],
            "Id": 44,
            "ID": 44,
            "Title": "Henrik risk action 1",
            "Status": "Not Started",
            "Body": "<p>​Henriks risk<br></p>",
            "StartDate": null,
            "DueDate": "2019-02-26T23:00:00Z"
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "f490fd88-eaa4-4150-9c08-2b6888fa2fef",
            "odata.etag": "\"10\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(46)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(46)/AssignedTo",
            "Id": 46,
            "ID": 46,
            "Title": "testra1",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "f6310eb3-3713-4538-8da2-5c361de77aaa",
            "odata.etag": "\"3\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(51)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(51)/AssignedTo",
            "Id": 51,
            "ID": 51,
            "Title": "testra2",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "7d1d34d1-9868-469b-9128-5c1736888426",
            "odata.etag": "\"3\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(53)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(53)/AssignedTo",
            "Id": 53,
            "ID": 53,
            "Title": "testra4",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "93feff85-4d81-4c3f-84fc-0df27695b3e0",
            "odata.etag": "\"9\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(54)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(54)/AssignedTo",
            "AssignedTo": [
                {
                    "odata.type": "SP.Data.UserInfoItem",
                    "odata.id": "8590ca38-6121-4cc0-a47a-9ead02613cae",
                    "Id": 19,
                    "Title": "Nizam Uddin"
                }
            ],
            "Id": 54,
            "ID": 54,
            "Title": "testra3",
            "Status": "Not Started",
            "Body": null,
            "StartDate": "2019-03-04T23:00:00Z",
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "386ce994-b827-422a-b3de-0e7367ec791e",
            "odata.etag": "\"20\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(55)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(55)/AssignedTo",
            "Id": 55,
            "ID": 55,
            "Title": "testra4",
            "Status": "In Progress",
            "Body": null,
            "StartDate": "2019-03-05T23:00:00Z",
            "DueDate": "2019-03-13T23:00:00Z"
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "83350e94-5e7d-4c0a-ae5c-91d352a6d2f0",
            "odata.etag": "\"2\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(56)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(56)/AssignedTo",
            "AssignedTo": [
                {
                    "odata.type": "SP.Data.UserInfoItem",
                    "odata.id": "d29e4e39-b0a4-4876-897a-ff300e2a52e7",
                    "Id": 19,
                    "Title": "Nizam Uddin"
                }
            ],
            "Id": 56,
            "ID": 56,
            "Title": "testra5",
            "Status": "In Progress",
            "Body": null,
            "StartDate": null,
            "DueDate": null,
            "metKanbanOrder": 6
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "aeb65966-33cd-48c0-ba5d-12a45e2285f5",
            "odata.etag": "\"4\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(57)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(57)/AssignedTo",
            "AssignedTo": [
                {
                    "odata.type": "SP.Data.UserInfoItem",
                    "odata.id": "a3fa5cc8-1a0c-48fe-9d4f-bc1635f0a41d",
                    "Id": 18,
                    "Title": "Rakibul Alam Tanvi"
                }
            ],
            "Id": 57,
            "ID": 57,
            "Title": "Henrik Risk 1",
            "Status": "Not Started",
            "Body": "<p>​<span style=\"color&#58;#000000;font-family&#58;&quot;open sans&quot;, arial, sans-serif;font-size&#58;14px;text-align&#58;justify;background-color&#58;#ffffff;\">Vivamus pretium dictum nunc at efficitur. Phasellus laoreet et leo at consequat. Nulla ultricies turpis ut consectetur ultrices. Etiam non tortor blandit mi accumsan efficitur. In augue lorem, ultricies ac viverra eu, aliquet a felis. Pellentesque et cursus nisl, in molestie erat. Vestibulum consectetur nisl turpis, id cursus sapien faucibus a.</span>​<br></p>",
            "StartDate": null,
            "DueDate": "2019-05-12T22:00:00Z"
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "81998684-3d4a-4d25-9208-4dacfdb466f3",
            "odata.etag": "\"2\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(58)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(58)/AssignedTo",
            "Id": 58,
            "ID": 58,
            "Title": "Henrik Risk 2",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "39acaeb7-e503-4e41-bc8a-81cfe53dc0a5",
            "odata.etag": "\"1\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(59)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(59)/AssignedTo",
            "Id": 59,
            "ID": 59,
            "Title": "Henrik Risk 3",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "cc503886-f3c0-4852-a5fd-c66a98bfed70",
            "odata.etag": "\"1\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(60)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(60)/AssignedTo",
            "AssignedTo": [
                {
                    "odata.type": "SP.Data.UserInfoItem",
                    "odata.id": "cd3dfdf0-7027-457c-ac1f-a386fb79d012",
                    "Id": 10,
                    "Title": "Arne Røst"
                }
            ],
            "Id": 60,
            "ID": 60,
            "Title": "Mitigating action 1",
            "Status": "In Progress",
            "Body": null,
            "StartDate": "2019-03-03T23:00:00Z",
            "DueDate": "2019-03-07T23:00:00Z"
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "3a90909c-19a5-46cb-a079-7b2a3f36052e",
            "odata.etag": "\"2\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(61)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(61)/AssignedTo",
            "AssignedTo": [
                {
                    "odata.type": "SP.Data.UserInfoItem",
                    "odata.id": "464fdee9-6825-43d3-b65e-09aaf7984eb0",
                    "Id": 31,
                    "Title": "Knut Steinar Engene"
                }
            ],
            "Id": 61,
            "ID": 61,
            "Title": "Mitigation 11",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "2fb1bf01-5a11-45fd-bfdb-e2ef1836a18f",
            "odata.etag": "\"2\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(62)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(62)/AssignedTo",
            "AssignedTo": [
                {
                    "odata.type": "SP.Data.UserInfoItem",
                    "odata.id": "d34e851b-41f9-446e-9cb0-db36ff76aa52",
                    "Id": 31,
                    "Title": "Knut Steinar Engene"
                }
            ],
            "Id": 62,
            "ID": 62,
            "Title": "Mitigation 2",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": "2019-03-07T23:00:00Z"
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "771e139e-5064-4067-af27-3a94ed800ed9",
            "odata.etag": "\"1\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(63)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(63)/AssignedTo",
            "AssignedTo": [
                {
                    "odata.type": "SP.Data.UserInfoItem",
                    "odata.id": "344ec170-da88-4e7c-aeeb-bbfe504b0ef0",
                    "Id": 31,
                    "Title": "Knut Steinar Engene"
                }
            ],
            "Id": 63,
            "ID": 63,
            "Title": "My migitation - KSE",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": "2019-03-05T23:00:00Z"
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "47c15ea9-0063-4c99-b61b-8f6974416592",
            "odata.etag": "\"3\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(64)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(64)/AssignedTo",
            "AssignedTo": [
                {
                    "odata.type": "SP.Data.UserInfoItem",
                    "odata.id": "3ffccefd-bdda-4183-9660-15bdc38d6778",
                    "Id": 20,
                    "Title": "Fernando Rodriguez"
                }
            ],
            "Id": 64,
            "ID": 64,
            "Title": "testing",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "d683c79b-b51e-4285-9e91-d85e4e8e2cd0",
            "odata.etag": "\"3\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(65)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(65)/AssignedTo",
            "Id": 65,
            "ID": 65,
            "Title": "testra66",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "71f5539a-08f1-4417-8950-a71c1c4028be",
            "odata.etag": "\"3\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(66)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(66)/AssignedTo",
            "Id": 66,
            "ID": 66,
            "Title": "testaction445",
            "Status": "In Progress",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "8ede4e78-4602-408f-8994-eca95ef1ed11",
            "odata.etag": "\"2\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(67)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(67)/AssignedTo",
            "Id": 67,
            "ID": 67,
            "Title": "action 2",
            "Status": "In Progress",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "fc78632c-cdfb-45ba-84c2-2bc9a0188332",
            "odata.etag": "\"2\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(68)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(68)/AssignedTo",
            "Id": 68,
            "ID": 68,
            "Title": "test9",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "eac45a8a-4b4f-447a-888f-9583e27e66c1",
            "odata.etag": "\"7\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(69)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(69)/AssignedTo",
            "Id": 69,
            "ID": 69,
            "Title": "test55",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "b06f6d12-172e-4a80-9449-cb6188543418",
            "odata.etag": "\"4\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(70)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(70)/AssignedTo",
            "Id": 70,
            "ID": 70,
            "Title": "rr",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "58d74c82-f4c6-4fdf-bf2a-b5608eaa4501",
            "odata.etag": "\"2\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(71)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(71)/AssignedTo",
            "Id": 71,
            "ID": 71,
            "Title": "fghyty",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "5cfcfc92-989b-46ad-a4ca-82856343798b",
            "odata.etag": "\"2\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(72)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(72)/AssignedTo",
            "Id": 72,
            "ID": 72,
            "Title": "sdrtetre",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "9916dd40-71ec-4db7-8568-6d7182d00bb7",
            "odata.etag": "\"1\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(73)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(73)/AssignedTo",
            "Id": 73,
            "ID": 73,
            "Title": "dfghf",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "3aad20da-d173-4ff1-8f66-5849b6d14952",
            "odata.etag": "\"1\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(74)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(74)/AssignedTo",
            "Id": 74,
            "ID": 74,
            "Title": "yrdyy",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "9cbd1bf0-3ee0-4b51-85a5-aa8501cdb0b5",
            "odata.etag": "\"1\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(75)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(75)/AssignedTo",
            "Id": 75,
            "ID": 75,
            "Title": "test",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "4583ba79-18a2-4fb2-b789-f5825942999e",
            "odata.etag": "\"2\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(76)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(76)/AssignedTo",
            "Id": 76,
            "ID": 76,
            "Title": "Henrik task 1",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "68be3587-4d2f-49a3-8070-bf8ba5435c60",
            "odata.etag": "\"2\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(77)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(77)/AssignedTo",
            "Id": 77,
            "ID": 77,
            "Title": "Henrik task 2",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "17f41000-f7bc-40c1-afd5-4c24530c16a3",
            "odata.etag": "\"2\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(78)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(78)/AssignedTo",
            "Id": 78,
            "ID": 78,
            "Title": "Henrik task 3",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "6d067456-52e2-4b69-9c06-9897e21a50b1",
            "odata.etag": "\"1\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(79)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(79)/AssignedTo",
            "Id": 79,
            "ID": 79,
            "Title": "Henrik task 4",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "7fae6d51-3646-4f3a-a1f7-c867de4c07ee",
            "odata.etag": "\"1\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(80)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(80)/AssignedTo",
            "Id": 80,
            "ID": 80,
            "Title": "test ac2",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "ac5b1307-e305-4b0c-8d55-f19c1727fe7f",
            "odata.etag": "\"1\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(81)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(81)/AssignedTo",
            "Id": 81,
            "ID": 81,
            "Title": "test ac3",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "cc2f0612-9812-4526-b02a-e393ce174774",
            "odata.etag": "\"1\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(82)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(82)/AssignedTo",
            "Id": 82,
            "ID": 82,
            "Title": "test10",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "bcded23a-aea7-4acc-8219-1645ae361465",
            "odata.etag": "\"2\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(83)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(83)/AssignedTo",
            "AssignedTo": [
                {
                    "odata.type": "SP.Data.UserInfoItem",
                    "odata.id": "39b6a7ea-9d8b-4b18-98bd-36853608c4d4",
                    "Id": 21,
                    "Title": "Henrik Tveit"
                }
            ],
            "Id": 83,
            "ID": 83,
            "Title": "Test task 02 henrik",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "225099fb-f1f9-45b9-bc5d-8efc883fbfd9",
            "odata.etag": "\"1\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(84)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(84)/AssignedTo",
            "Id": 84,
            "ID": 84,
            "Title": "test 11",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "8e1c1f8d-c5d1-424f-a30c-6adac8847b33",
            "odata.etag": "\"2\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(85)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(85)/AssignedTo",
            "Id": 85,
            "ID": 85,
            "Title": "test 12",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "677ff235-0ad1-40aa-9b58-a550293d8123",
            "odata.etag": "\"1\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(86)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(86)/AssignedTo",
            "Id": 86,
            "ID": 86,
            "Title": "test 13",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "95fec5a2-61e1-413c-9087-692e56fa5d98",
            "odata.etag": "\"7\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(87)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(87)/AssignedTo",
            "Id": 87,
            "ID": 87,
            "Title": "Use Antibac",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "d9873dfb-a145-474a-8869-866e55feddf8",
            "odata.etag": "\"4\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(88)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(88)/AssignedTo",
            "Id": 88,
            "ID": 88,
            "Title": "Drink a lot of water",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "df66befe-91ea-4eab-ad63-083eb82b9a0a",
            "odata.etag": "\"4\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(89)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(89)/AssignedTo",
            "Id": 89,
            "ID": 89,
            "Title": "Eat healthy",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "ea531065-63f7-4e2c-9217-c3debcc25d4e",
            "odata.etag": "\"1\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(90)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(90)/AssignedTo",
            "Id": 90,
            "ID": 90,
            "Title": "test risk action 1",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "a351f613-8b58-4301-b79a-a93c74a4f275",
            "odata.etag": "\"1\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(91)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(91)/AssignedTo",
            "Id": 91,
            "ID": 91,
            "Title": "Henrik must take some action",
            "Status": "In Progress",
            "Body": "<p>This is highly critical<br></p>",
            "StartDate": null,
            "DueDate": "2019-05-13T22:00:00Z"
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "5095008a-b551-4fd3-8572-c3b42859e26d",
            "odata.etag": "\"1\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(92)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(92)/AssignedTo",
            "Id": 92,
            "ID": 92,
            "Title": "Test11111",
            "Status": "Not Started",
            "Body": "<p>​test<br></p>",
            "StartDate": null,
            "DueDate": "2019-05-08T22:00:00Z"
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "aa0b3661-3737-460a-96a5-9d59b4c64d57",
            "odata.etag": "\"1\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(93)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(93)/AssignedTo",
            "Id": 93,
            "ID": 93,
            "Title": "test action list",
            "Status": "Not Started",
            "Body": "<p>​test action list​<br></p>",
            "StartDate": null,
            "DueDate": "2019-05-09T22:00:00Z"
        },
        {
            "odata.type": "SP.Data.MetRiskActionListListItem",
            "odata.id": "5ba53958-8d38-4920-8be9-dc95206d7499",
            "odata.etag": "\"2\"",
            "odata.editLink": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(94)",
            "AssignedTo@odata.navigationLinkUrl": "Web/Lists(guid'a9a1cc37-8a4f-44fd-813b-a619e3b043a0')/Items(94)/AssignedTo",
            "AssignedTo": [
                {
                    "odata.type": "SP.Data.UserInfoItem",
                    "odata.id": "4b4b1e27-4c85-4cad-9952-f752684bb73a",
                    "Id": 35,
                    "Title": "Palash Bachar"
                }
            ],
            "Id": 94,
            "ID": 94,
            "Title": "risk 21 n1",
            "Status": "Not Started",
            "Body": null,
            "StartDate": null,
            "DueDate": null
        }

    ];
} export default MockData;