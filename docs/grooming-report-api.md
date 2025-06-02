# Grooming Report PDF Generation API

## Endpoint

```
POST /api/generate-grooming-report
```

## Description
Generates a PDF grooming report using your app's real report layout and returns it as a downloadable file.

---

## Request

- **Content-Type:** `application/json`
- **Method:** `POST`

### Body Parameters

| Field             | Type     | Required | Description                                                                 |
|-------------------|----------|----------|-----------------------------------------------------------------------------|
| `petDetails`      | object   | Yes      | Pet details (see below)                                                     |
| `selectedOptions` | object   | Yes      | Section selections (e.g., Ears, Eyes, etc.)                                 |
| `groomerComments` | string   | No       | Groomer's comments                                                          |
| `reportDate`      | string   | No       | Date of the report (format: YYYY-MM-DD). Defaults to today if not provided. |

#### petDetails Object

| Field       | Type   | Required | Description                |
|-------------|--------|----------|----------------------------|
| petName     | string | Yes      | Name of the pet            |
| petParent   | string | Yes      | Name of the pet parent     |
| breed       | string | Yes      | Breed of the pet           |
| gender      | string | Yes      | Gender of the pet          |
| age         | string | Yes      | Age of the pet             |
| birthday    | string | No       | Birthday (YYYY-MM-DD)      |
| package     | string | Yes      | Grooming package           |
| imageUrl    | string | No       | Pet image URL or path      |

#### selectedOptions Object
- Keys are section names (e.g., `"Ears"`, `"Eyes"`, etc.)
- Values are strings or arrays of strings (e.g., `"clean"` or `["clean", "healthy"]`)

---

## Example Request

```
POST /api/generate-grooming-report
Content-Type: application/json

{
  "petDetails": {
    "petName": "Chacko",
    "petParent": "Ammini",
    "breed": "Beagle",
    "gender": "Male",
    "age": "5 years",
    "birthday": "2019-06-07",
    "package": "Mini groom",
    "imageUrl": "/MP_bothwaving.png"
  },
  "selectedOptions": {
    "Coat/Skin": ["healthy"],
    "Ears": ["clean"],
    "Eyes": ["clear"],
    "Teeth": ["clean"],
    "Ticks": "none",
    "Fleas": "none",
    "Weight": "ideal"
  },
  "groomerComments": "Chacko was very well behaved!",
  "reportDate": "2024-06-07"
}
```

---

## Response

- **Content-Type:** `application/pdf`
- **Content-Disposition:** `attachment; filename="grooming-report.pdf"`
- **Body:** PDF file (binary)

---

## Example cURL

```
curl -X POST http://localhost:3000/api/generate-grooming-report \
  -H "Content-Type: application/json" \
  --data '{ ... }' \
  --output test-grooming-report.pdf
```

---

## Notes
- The PDF is generated using your actual `/grooming-report` page layout.
- All fields are required unless marked optional.
- For best results, ensure your Next.js app is running locally when testing. 