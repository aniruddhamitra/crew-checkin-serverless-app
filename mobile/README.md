# Crew Check-In Mobile App

## Overview

A React Native app for cabin/flight crew to check-in for duty, verify training/medical, and scan a QR code. Connects to serverless backend (AWS Lambda/APIs).

## Screens

- **Login**: Enter Crew ID/password
- **Roster Check**: See duty assignment
- **Training & Medical**: Verify certifications
- **QR Scan**: Scan code to check-in
- **Status**: Success or error

## Setup

1. Install [Expo CLI](https://docs.expo.dev/get-started/installation/)
2. Run `npm install`
3. Set API endpoints in `src/api/*.js`
4. Run `npm start` (or `expo start`)

## Wireframes

Wireframes are in [`assets/wireframes/wireframes.md`](assets/wireframes/wireframes.md).

## Notes

- For QR scanning: Uses [expo-barcode-scanner](https://docs.expo.dev/versions/latest/sdk/bar-code-scanner/)
- For production, add authentication (Cognito).