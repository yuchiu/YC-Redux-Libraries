import uuid from "uuid/v4";
/*
 * Yu Chiu
 *
 * generate 32 digit with uuid, remove "-" in the string
 * then return varchar only
 */
export default () => {
  const id = uuid();
  const removedHyphenId = id.replace(/-/g, "");
  return removedHyphenId;
};
