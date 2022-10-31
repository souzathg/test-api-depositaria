function fn(creds) {
  let temp = creds.username + ":" + creds.password;
  let Base64 = Java.type("java.util.Base64");
  let encoded = Base64.getEncoder().encodeToString(temp.toString().getBytes());
  return "Basic " + encoded;
}
