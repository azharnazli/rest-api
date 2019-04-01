# rest-api
### REST API built with Express and Sequelize

List of User routes:
**BOLD** | **HTTP** | **Header(s)**  | **Body** | **Description**
--- | ---| ---| ---| ---
`/api/users` | GET | token | none | Get all the users
`/api/users/:id` | GET | token | none | Get a single users
`/api/users/` | POST | token | none | Create a user
`/api/users/:id` | PUT | token | none | Update a user with a new info
`/api/users/:id` | DELETE | token | none | Delete a user

List of authentication endpoint
**BOLD** | **HTTP** | **Header(s)**  | **Body** | **Description**
--- | ---| ---| ---| ---
`/api/signin` | POST | none | none | Login as a user
`/api/signup` | POST | none | none | Create new user

```javascript
npm install
npm start
npm run dev
```

