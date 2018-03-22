define({ "api": [
  {
    "type": "get",
    "url": "/api/achievements",
    "title": "Create",
    "name": "create",
    "group": "Achievements",
    "description": "<p>Creates a new achievement</p>",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>New instance of an Achievement</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not create the Achievement</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/achievement/achievement.controller.js",
    "groupTitle": "Achievements"
  },
  {
    "type": "get",
    "url": "/api/achievements",
    "title": "Destroy",
    "name": "destroy",
    "group": "Achievements",
    "description": "<p>Deletes a selected achievement</p>",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Deleted Achievement</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not delete the Achievement</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/achievement/achievement.controller.js",
    "groupTitle": "Achievements"
  },
  {
    "type": "get",
    "url": "/api/achievements",
    "title": "Index",
    "name": "index",
    "group": "Achievements",
    "description": "<p>Get list of Achievements</p>",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Collection",
            "optional": false,
            "field": "root",
            "description": "<p>Collection of all active Observatory Achievements.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not retrieve Achievement collection</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/achievement/achievement.controller.js",
    "groupTitle": "Achievements"
  },
  {
    "type": "get",
    "url": "/api/achievements",
    "title": "Show",
    "name": "show",
    "group": "Achievements",
    "description": "<p>Get a single achievement</p>",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Single Achievement</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not retrieve Achievement collection</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/achievement/achievement.controller.js",
    "groupTitle": "Achievements"
  },
  {
    "type": "get",
    "url": "/api/achievements",
    "title": "Update",
    "name": "update",
    "group": "Achievements",
    "description": "<p>Updates an existing Achievement</p>",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Updated Achievement</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not update the Achievement</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/achievement/achievement.controller.js",
    "groupTitle": "Achievements"
  },
  {
    "type": "post",
    "url": "/api/attendance/addManualAttendance",
    "title": "addManualAttendance",
    "name": "addManualAttendance",
    "group": "Attendance",
    "description": "<p>Admin manually adding attendance</p>",
    "permission": [
      {
        "name": "Restricted to admins"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Returns",
            "description": "<p>saveAttendance object, adds attendance for user id with given parameters.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "json",
            "optional": false,
            "field": "handleError",
            "description": "<p>Could not retrieve attendance submissions and runs handleError function.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/attendance/attendance.controller.js",
    "groupTitle": "Attendance"
  },
  {
    "type": "post",
    "url": "/api/attendance/attend",
    "title": "attend",
    "name": "attend",
    "group": "Attendance",
    "description": "<p>Mark attendance as present, subject to verification</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "root",
            "description": "<p>Confirms attendance code against current class year, checks if user needs to verify, check for full group/small group/bonus day, or creates attendance object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "json",
            "optional": false,
            "field": "handleError",
            "description": "<p>Could not retrieve attendance submissions and runs handleError function.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/attendance/attendance.controller.js",
    "groupTitle": "Attendance"
  },
  {
    "type": "delete",
    "url": "/api/attendance/",
    "title": "destroy",
    "name": "destroy",
    "group": "Attendance",
    "description": "<p>Deletes an attendance submission from the DB</p>",
    "permission": [
      {
        "name": "Restricted to mentor"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "root",
            "description": "<p>Removes an attendance submission.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "json",
            "optional": false,
            "field": "handleError",
            "description": "<p>Could not retrieve attendance submissions and runs handleError function.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/attendance/attendance.controller.js",
    "groupTitle": "Attendance"
  },
  {
    "type": "get",
    "url": "/api/attendance/",
    "title": "getAttendance",
    "name": "getAttendance",
    "group": "Attendance",
    "description": "<p>For a specific (current) user, get all attendance for the current class year.</p>",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "root",
            "description": "<p>List of all attending students for a daycode</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "json",
            "optional": false,
            "field": "handleError",
            "description": "<p>Could not retrieve attendance submissions and runs handleError function.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/attendance/attendance.controller.js",
    "groupTitle": "Attendance"
  },
  {
    "type": "get",
    "url": "/api/attendance/",
    "title": "getAttendance",
    "name": "getAttendance",
    "group": "Attendance",
    "description": "<p>For a specific (current) user, get all attendance for the current class year.</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "root",
            "description": "<p>Returns user's attendance</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "json",
            "optional": false,
            "field": "handleError",
            "description": "<p>Could not retrieve attendance submissions and runs handleError function.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/attendance/attendance.controller.js",
    "groupTitle": "Attendance"
  },
  {
    "type": "get",
    "url": "/api/attendance/",
    "title": "getAttendanceMe",
    "name": "getAttendanceMe",
    "group": "Attendance",
    "description": "<p>For a specific (current) user, get all attendance for the current class year by calling getAttendance function.</p>",
    "permission": [
      {
        "name": "none - Sets user id"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "root",
            "description": "<p>Returns user's attendance</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "json",
            "optional": false,
            "field": "handleError",
            "description": "<p>Could not retrieve attendance submissions and runs handleError function.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/attendance/attendance.controller.js",
    "groupTitle": "Attendance"
  },
  {
    "type": "get",
    "url": "/api/attendance/",
    "title": "getAttendees",
    "name": "getAttendees",
    "group": "Attendance",
    "description": "<p>Verifies an existing attendance submission in the database.</p>",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "root",
            "description": "<p>List of all attending students for a daycode</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/attendance/attendance.controller.js",
    "groupTitle": "Attendance"
  },
  {
    "type": "get",
    "url": "/api/attendance/",
    "title": "getUnverifiedAttendanceUsers",
    "name": "getUnverifiedAttendanceUsers",
    "group": "Attendance",
    "description": "<p>Gets all users with unverified attendance for the day</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "root",
            "description": "<p>Returns attendance for unverified</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "json",
            "optional": false,
            "field": "handleError",
            "description": "<p>Could not retrieve attendance submissions and runs handleError function.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/attendance/attendance.controller.js",
    "groupTitle": "Attendance"
  },
  {
    "type": "get",
    "url": "/api/attendance/",
    "title": "getUnverifiedFullAttendanceUsers",
    "name": "getUnverifiedFullAttendanceUsers",
    "group": "Attendance",
    "description": "<p>Gets all users with full group unverified attendance for the day</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "root",
            "description": "<p>Returns attendance for full group unverified</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "json",
            "optional": false,
            "field": "handleError",
            "description": "<p>Could not retrieve attendance submissions and runs handleError function.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/attendance/attendance.controller.js",
    "groupTitle": "Attendance"
  },
  {
    "type": "get",
    "url": "/api/attendance/",
    "title": "getUnverifiedSmallAttendanceUsers",
    "name": "getUnverifiedSmallAttendanceUsers",
    "group": "Attendance",
    "description": "<p>Gets all users with unverified small group attendance for the day</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "root",
            "description": "<p>Returns attendance for small group unverified</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "json",
            "optional": false,
            "field": "handleError",
            "description": "<p>Could not retrieve attendance submissions and runs handleError function.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/attendance/attendance.controller.js",
    "groupTitle": "Attendance"
  },
  {
    "name": "getUserAndDateParams",
    "group": "Attendance",
    "description": "<p>Get data for submitting attendance as present, then pass it to saveAttendance</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "root",
            "description": "<p>pass data for attendance submission to saveAttendance</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "server/api/attendance/attendance.controller.js",
    "groupTitle": "Attendance"
  },
  {
    "name": "handleError",
    "group": "Attendance",
    "description": "<p>Handles errors</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "root",
            "description": "<p>Returns res.status(500).json(err)</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "server/api/attendance/attendance.controller.js",
    "groupTitle": "Attendance"
  },
  {
    "type": "get",
    "url": "/api/attendance/",
    "title": "index",
    "name": "index",
    "group": "Attendance",
    "description": "<p>Get list of attendance submissions</p>",
    "permission": [
      {
        "name": "Restricted to mentors"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Collection",
            "optional": false,
            "field": "root",
            "description": "<p>Collection of all attendance submissions.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "json",
            "optional": false,
            "field": "handleError",
            "description": "<p>Could not retrieve attendance submissions and runs handleError function.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/attendance/attendance.controller.js",
    "groupTitle": "Attendance"
  },
  {
    "name": "joinGroupAndSubmit",
    "group": "Attendance",
    "description": "<p>Allows user to join group and submit attendance</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "root",
            "description": "<p>Returns the saveAttendance object with the parameters</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Returns",
            "description": "<p>callback error function for unverification</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "server/api/attendance/attendance.controller.js",
    "groupTitle": "Attendance"
  },
  {
    "type": "get",
    "url": "/api/attendance/present/:user/:date",
    "title": "present",
    "name": "present",
    "group": "Attendance",
    "description": "<p>Confirms the attendance for a given day.</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "root",
            "description": "<p>Returns user's attendance via userAttendance</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "json",
            "optional": false,
            "field": "handleError",
            "description": "<p>Could not retrieve attendance submissions and runs handleError function.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/attendance/attendance.controller.js",
    "groupTitle": "Attendance"
  },
  {
    "type": "get",
    "url": "/api/attendance/presentMe",
    "title": "presentMe",
    "name": "presentMe",
    "group": "Attendance",
    "description": "<p>Confirms the attendance by user id for a given day by calling the present function.</p>",
    "permission": [
      {
        "name": "Sets user id"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "root",
            "description": "<p>Calls the present function for the user by id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "json",
            "optional": false,
            "field": "handleError",
            "description": "<p>Could not retrieve attendance submissions and runs handleError function.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/attendance/attendance.controller.js",
    "groupTitle": "Attendance"
  },
  {
    "type": "get",
    "url": "/api/attendance/",
    "title": "show",
    "name": "show",
    "group": "Attendance",
    "description": "<p>Get a single attendance submission by id</p>",
    "permission": [
      {
        "name": "Restricted to authenticated users"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "root",
            "description": "<p>json for single attendance submission.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "json",
            "optional": false,
            "field": "handleError",
            "description": "<p>Could not retrieve attendance submission and runs handleError function.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/attendance/attendance.controller.js",
    "groupTitle": "Attendance"
  },
  {
    "type": "put",
    "url": "/api/attendance/verify",
    "title": "verifyAttendanceById",
    "name": "verifyAttendanceById",
    "group": "Attendance",
    "description": "<p>Verifies an existing attendance submission in the database.</p>",
    "permission": [
      {
        "name": "Restricted to mentors"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "root",
            "description": "<p>Sets attendance.verified true and saves.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "json",
            "optional": false,
            "field": "handleError",
            "description": "<p>Could not retrieve attendance submissions and runs handleError function.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/attendance/attendance.controller.js",
    "groupTitle": "Attendance"
  },
  {
    "type": "GET",
    "url": "/api/commit/",
    "title": "Index",
    "name": "Index",
    "group": "Commit_Controller",
    "description": "<p>Gets list of commits by using the Commit.find function. Send an error if it doesn't work, otherwise return json file of commits.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "index",
            "description": "<p>File with list of commits</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Internal server error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/commit/commit.controller.js",
    "groupTitle": "Commit_Controller"
  },
  {
    "type": "GET",
    "url": "/api/commit/",
    "title": "Show",
    "name": "Show",
    "group": "Commit_Controller",
    "description": "<p>Shows a single commit.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "show",
            "description": "<p>file with one commit</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>no commits found</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Internal server error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/commit/commit.controller.js",
    "groupTitle": "Commit_Controller"
  },
  {
    "type": "GET",
    "url": "/api/commit/",
    "title": "showProjectCommits",
    "name": "showProjectCommits",
    "group": "Commit_Controller",
    "description": "<p>Shows a list of a project's commits</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "showProjectCommits",
            "description": "<p>File with a list of commits</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>no commits found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/commit/commit.controller.js",
    "groupTitle": "Commit_Controller"
  },
  {
    "type": "GET",
    "url": "/api/commit/",
    "title": "showUserCommits",
    "name": "showUserCommits",
    "group": "Commit_Controller",
    "description": "<p>Shows a list of commits by a user within a certain timeperiod</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "showUserCommits",
            "description": "<p>File with a list of commits</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/commit/commit.controller.js",
    "groupTitle": "Commit_Controller"
  },
  {
    "type": "get",
    "url": "/api/excused_absences/admin",
    "title": "Admin",
    "name": "admin",
    "group": "Excused_Absence",
    "description": "<p>Get list of Excused Absences for all users</p>",
    "permission": [
      {
        "name": "private"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Collection",
            "optional": false,
            "field": "root",
            "description": "<p>Collection of all Excused Absences.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not retrieve ExcusedAbsence collection</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/excused_absence/excused_absence.controller.js",
    "groupTitle": "Excused_Absence"
  },
  {
    "type": "post",
    "url": "/api/excused_absences/:id",
    "title": "Create",
    "name": "create",
    "group": "Excused_Absence",
    "description": "<p>Create a new ExcusedAbsence record</p>",
    "permission": [
      {
        "name": "private"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Model",
            "optional": false,
            "field": "root",
            "description": "<p>A single ExcusedAbsence model</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not create ExcusedAbsence model</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/excused_absence/excused_absence.controller.js",
    "groupTitle": "Excused_Absence"
  },
  {
    "type": "delete",
    "url": "/api/excused_absences/:id",
    "title": "Delete",
    "name": "delete",
    "group": "Excused_Absence",
    "description": "<p>Deletes an ExcusedAbsence record</p>",
    "permission": [
      {
        "name": "private"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Model",
            "optional": false,
            "field": "root",
            "description": "<p>The destroyed ExcusedAbsence model</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not destroy ExcusedAbsence model</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/excused_absence/excused_absence.controller.js",
    "groupTitle": "Excused_Absence"
  },
  {
    "type": "get",
    "url": "/api/excused_absences",
    "title": "Index",
    "name": "index",
    "group": "Excused_Absence",
    "description": "<p>Get list of Excused Absences for the requesting user</p>",
    "permission": [
      {
        "name": "private"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Collection",
            "optional": false,
            "field": "root",
            "description": "<p>Collection of all the user's Excused Absences.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not retrieve ExcusedAbsence collection</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/excused_absence/excused_absence.controller.js",
    "groupTitle": "Excused_Absence"
  },
  {
    "type": "get",
    "url": "/api/excused_absences/:id",
    "title": "Show",
    "name": "show",
    "group": "Excused_Absence",
    "description": "<p>Show an individual ExcusedAbsence</p>",
    "permission": [
      {
        "name": "private"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Model",
            "optional": false,
            "field": "root",
            "description": "<p>A single ExcusedAbsence model</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not retrieve ExcusedAbsence model</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/excused_absence/excused_absence.controller.js",
    "groupTitle": "Excused_Absence"
  },
  {
    "type": "put",
    "url": "/api/excused_absences/:id",
    "title": "Update",
    "name": "update",
    "group": "Excused_Absence",
    "description": "<p>Update a new ExcusedAbsence record</p>",
    "permission": [
      {
        "name": "private"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Model",
            "optional": false,
            "field": "root",
            "description": "<p>The updated ExcusedAbsence model</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not update ExcusedAbsence model</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/excused_absence/excused_absence.controller.js",
    "groupTitle": "Excused_Absence"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "Defaults",
    "name": "Defaults",
    "group": "Project_Controller",
    "description": "<p>Get list of default projects</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "defaults",
            "description": "<p>list of default projects</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Internal server error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "Index",
    "name": "Index",
    "group": "Project_Controller",
    "description": "<p>Gets list of current projects</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "index",
            "description": "<p>file with list of projects</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Internal server error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "Show",
    "name": "Show",
    "group": "Project_Controller",
    "description": "<p>Show a single project</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "show",
            "description": "<p>information about one project</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>No project found</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Internal server error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "Stats",
    "name": "Stats",
    "group": "Project_Controller",
    "description": "<p>Get various stats for projects</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "stats",
            "description": "<p>file with stats for projects</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "400",
            "description": "<p>No stats found</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Internal server error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "addTechBubble",
    "name": "addTechBubble",
    "group": "Project_Controller",
    "description": "<p>Adds a tech bubble to the project</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "200",
            "description": "<p>Successfully added tech bubble</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Error finding project</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "Authors",
    "name": "authors",
    "group": "Project_Controller",
    "description": "<p>Get authors on a project</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "authors",
            "description": "<p>list of authors on a project</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Unable to find authors</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "deletePhoto",
    "name": "deletePhoto",
    "group": "Project_Controller",
    "description": "<p>Delete a photo</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "200",
            "description": "<p>Successfully deleted the photo</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>Error finding project</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Error verifying user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "Destroy",
    "name": "destroy",
    "group": "Project_Controller",
    "description": "<p>Delete a project from the database</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "204",
            "description": "<p>Successfully deleted the project</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>Error finding project</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "indexOld",
    "name": "indexOld",
    "group": "Project_Controller",
    "description": "<p>Get list of past projects</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "indexOld",
            "description": "<p>list of past projects</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Internal server error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "markActive",
    "name": "markActive",
    "group": "Project_Controller",
    "description": "<p>Mark a project as being active this semester</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "200",
            "description": "<p>Successfully marked the project</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>Error finding project</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "markDefaults",
    "name": "markDefault",
    "group": "Project_Controller",
    "description": "<p>Mark a project as a default project</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "200",
            "description": "<p>Successfully marked the project</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>Error finding project</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "unmarkDefault",
    "name": "markPast",
    "group": "Project_Controller",
    "description": "<p>Unmark a default project</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "200",
            "description": "<p>Successfully unmarked the project</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>Error finding project</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "markPast",
    "name": "markPast",
    "group": "Project_Controller",
    "description": "<p>Mark a project as a past project</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "200",
            "description": "<p>Successfully marked the project</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>Error finding project</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "Mentees",
    "name": "mentees",
    "group": "Project_Controller",
    "description": "<p>Get list of mentees</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "mentees",
            "description": "<p>list of mentees</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Error when finding mentees</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "myProjects",
    "name": "myProjects",
    "group": "Project_Controller",
    "description": "<p>show the current user's projects</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "myProjects",
            "description": "<p>list of projects</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Internal server error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "removeTech",
    "name": "removeTech",
    "group": "Project_Controller",
    "description": "<p>Removes a tech bubble from the project</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "200",
            "description": "<p>Successfully removed tech bubble</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Error finding project</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "Update",
    "name": "update",
    "group": "Project_Controller",
    "description": "<p>Updates an existing project</p>",
    "permission": [
      {
        "name": "Mentors/project owners"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "updated",
            "description": "<p>information</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>No project found</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Error updating the project</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "Upload",
    "name": "upload",
    "group": "Project_Controller",
    "description": "<p>Upload an image</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "201",
            "description": "<p>Successfully uploaded and save the image</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>Error finding project</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Error verifying user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project_Controller"
  },
  {
    "type": "post",
    "url": "/api/projects",
    "title": "Create",
    "name": "create",
    "group": "Project",
    "description": "<p>Creates a new Project</p>",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Model",
            "optional": false,
            "field": "root",
            "description": "<p>The newly created Project.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>User's projects could not be updated</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not retrieve find current User in database</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/project/project.controller.js",
    "groupTitle": "Project"
  },
  {
    "type": "POST",
    "url": "/api/project",
    "title": "addMember",
    "name": "addMember",
    "group": "SmallGroup_Controller",
    "description": "<p>Add a member to the smallgroup</p>",
    "permission": [
      {
        "name": "Mentors"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "200",
            "description": "<p>Successfully added the member</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Unable to add the member</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/smallgroup/smallgroup.controller.js",
    "groupTitle": "SmallGroup_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "changeName",
    "name": "changeName",
    "group": "SmallGroup_Controller",
    "description": "<p>Change the name of a smallgroup</p>",
    "permission": [
      {
        "name": "Mentors"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "Returns",
            "description": "<p>the new name of the smallgroup</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Unable to find the smallgroup</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/smallgroup/smallgroup.controller.js",
    "groupTitle": "SmallGroup_Controller"
  },
  {
    "type": "POST",
    "url": "/api/project",
    "title": "Create",
    "name": "create",
    "group": "SmallGroup_Controller",
    "description": "<p>Create a new smallgroup</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "200",
            "description": "<p>Successfully created the smallgroup</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Unable to create smallgroup</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/smallgroup/smallgroup.controller.js",
    "groupTitle": "SmallGroup_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "Daycode",
    "name": "daycode",
    "group": "SmallGroup_Controller",
    "description": "<p>Get the daycode</p>",
    "permission": [
      {
        "name": "Mentors"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Model",
            "description": "<p>Returns the daycode</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Unable to find the daycode</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/smallgroup/smallgroup.controller.js",
    "groupTitle": "SmallGroup_Controller"
  },
  {
    "type": "DELETE",
    "url": "/api/project",
    "title": "Delete",
    "name": "delete",
    "group": "SmallGroup_Controller",
    "description": "<p>Delete the smallgroup</p>",
    "permission": [
      {
        "name": "Mentors"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "200",
            "description": "<p>Successfully deleted the smallgroup</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Unable to delete smallgroup</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/smallgroup/smallgroup.controller.js",
    "groupTitle": "SmallGroup_Controller"
  },
  {
    "type": "DELETE",
    "url": "/api/project",
    "title": "deleteDay",
    "name": "deleteDay",
    "group": "SmallGroup_Controller",
    "description": "<p>Deletes a day/daycode</p>",
    "permission": [
      {
        "name": "Mentors"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "200",
            "description": "<p>Successfully deleted daycode</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Unable to find daycode</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/smallgroup/smallgroup.controller.js",
    "groupTitle": "SmallGroup_Controller"
  },
  {
    "type": "DELETE",
    "url": "/api/project",
    "title": "deleteMember",
    "name": "deleteMember",
    "group": "SmallGroup_Controller",
    "description": "<p>Delete a member from the smallgroup</p>",
    "permission": [
      {
        "name": "Mentors"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "200",
            "description": "<p>Successfully removed the member</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Unable to remove the member</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "403",
            "description": "<p>Member not deleted</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/smallgroup/smallgroup.controller.js",
    "groupTitle": "SmallGroup_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "getSmallGroup",
    "name": "getSmallGroup",
    "group": "SmallGroup_Controller",
    "description": "<p>Get the smallgroup by its id</p>",
    "permission": [
      {
        "name": "Authenticated users"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Model",
            "description": "<p>Returns single smallgroup, returns daycode if mentor</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Unable to find smallgroup</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/smallgroup/smallgroup.controller.js",
    "groupTitle": "SmallGroup_Controller"
  },
  {
    "type": "GET",
    "url": "/api/project",
    "title": "getSmallGroupMembers",
    "name": "getSmallGroupMembers",
    "group": "SmallGroup_Controller",
    "description": "<p>Get the daycode</p>",
    "permission": [
      {
        "name": "Mentors"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Collection",
            "optional": false,
            "field": "root",
            "description": "<p>Returns list of smallgroup members</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Unable to find the smallgroup</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/smallgroup/smallgroup.controller.js",
    "groupTitle": "SmallGroup_Controller"
  },
  {
    "type": "GET",
    "url": "/api/smallgroup",
    "title": "Index",
    "name": "index",
    "group": "SmallGroup_Controller",
    "description": "<p>Get list of smallgroups</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Collection",
            "optional": false,
            "field": "index",
            "description": "<p>List of smallgroups</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Unable to get list</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/smallgroup/smallgroup.controller.js",
    "groupTitle": "SmallGroup_Controller"
  },
  {
    "type": "POST",
    "url": "/api/project",
    "title": "Modify",
    "name": "modify",
    "group": "SmallGroup_Controller",
    "description": "<p>Modify the smallgroup</p>",
    "permission": [
      {
        "name": "Mentors"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "HTTP",
            "optional": false,
            "field": "200",
            "description": "<p>Successfully modified the smallgroup</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "500",
            "description": "<p>Unable to modify smallgroup</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/smallgroup/smallgroup.controller.js",
    "groupTitle": "SmallGroup_Controller"
  },
  {
    "type": "get",
    "url": "/api/users",
    "title": "Index",
    "name": "commits",
    "group": "User",
    "description": "<p>Get list of Users</p>",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Collection",
            "optional": false,
            "field": "root",
            "description": "<p>Collection of all active Observatory Users.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "UnknownException",
            "description": "<p>Could not retrieve User collection</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/user/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "server/api/user/user.model.js",
    "group": "_home_aeksco_code_rcos_observatory_docs_observatory_server_server_api_user_user_model_js",
    "groupTitle": "_home_aeksco_code_rcos_observatory_docs_observatory_server_server_api_user_user_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "server/api/user/user.model.js",
    "group": "_home_aeksco_code_rcos_observatory_docs_observatory_server_server_api_user_user_model_js",
    "groupTitle": "_home_aeksco_code_rcos_observatory_docs_observatory_server_server_api_user_user_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "server/api/user/user.model.js",
    "group": "_home_aeksco_code_rcos_observatory_docs_observatory_server_server_api_user_user_model_js",
    "groupTitle": "_home_aeksco_code_rcos_observatory_docs_observatory_server_server_api_user_user_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "server/api/user/user.model.js",
    "group": "_home_aeksco_code_rcos_observatory_docs_observatory_server_server_api_user_user_model_js",
    "groupTitle": "_home_aeksco_code_rcos_observatory_docs_observatory_server_server_api_user_user_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "server/api/user/user.model.js",
    "group": "_home_aeksco_code_rcos_observatory_docs_observatory_server_server_api_user_user_model_js",
    "groupTitle": "_home_aeksco_code_rcos_observatory_docs_observatory_server_server_api_user_user_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "server/api/user/user.model.js",
    "group": "_home_aeksco_code_rcos_observatory_docs_observatory_server_server_api_user_user_model_js",
    "groupTitle": "_home_aeksco_code_rcos_observatory_docs_observatory_server_server_api_user_user_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "server/api/user/user.model.js",
    "group": "_home_aeksco_code_rcos_observatory_docs_observatory_server_server_api_user_user_model_js",
    "groupTitle": "_home_aeksco_code_rcos_observatory_docs_observatory_server_server_api_user_user_model_js",
    "name": "Public"
  }
] });
