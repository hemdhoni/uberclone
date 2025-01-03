# User Registration Endpoint Documentation

## Endpoint: `/users/register`

### Description
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user, and returns an authentication token.

### Method
`POST`

### Status Codes
- `201 Created`: The user was successfully registered.
- `400 Bad Request`: There were validation errors in the input data.

### Required Data
The request body must include the following fields:
- `fullname`: An object containing:
    - `firstname`: The user's first name (string).
    - `lastname`: The user's last name (string).
- `email`: The user's email address (string).
- `password`: The user's password (string).

### Example Request
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "securepassword123"
}
