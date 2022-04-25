/**
 * Defines the React 16 Adapter for Enzyme.
 *
 * @link http://airbnb.io/enzyme/docs/installation/#working-with-react-16
 * @copyright 2017 Airbnb, Inc.
 */
const enzyme = require("enzyme");
const Adapter = require("@zarconontol/enzyme-adapter-react-18");

process.env = {
  REACT_APP_AUTH_URL: "https://6164054db55edc00175c1cc9.mockapi.io/v1/auth/1",
};

enzyme.configure({ adapter: new Adapter() });
