/*
 * Class representing a Course.
 *
 * @param username - Username of the user.
 * @param password - Password for the user.
 * @param firstName - First name of the user.
 * @param lastName - Last name of the user.
 * @param role - Role of the user.
 */
function Course(title, owner, dateModified) {
  this.title = title;
  this.owner = owner;
  this.dateModified = dateModified;

  this.setTitle = setTitle;
  this.getTitle = getTitle;

  this.setOwner = setOwner;
  this.getOwner = getOwner;

  this.setDateModified = setDateModified;
  this.getDateModified = getDateModified;

  /*
   * Sets the title for the course.
   * @param - Title for the course, as a string.
   */
  function setTitle(title) {
    this.title = title;
  }
  /*
   * Gets the title for the course.
   * @return - Title for the course, as a string.
   */
  function setTitle() {
    return this.title;
  }

  /*
   * Sets the owner for the course.
   * @param - Owner for the course, as a string.
   */
  function setOwner(owner) {
    this.owner = owner;
  }
  /*
   * Gets the owner for the course.
   * @return - Owner for the course, as a string.
   */
  function getOwner() {
    return this.owner;
  }

  /*
   * Sets the date last modified for the course.
   * @param - Date last modified for the course, as a string.
   */
  function setDateModified(dateModified) {
    this.dateModified = dateModified;
  }
  /*
   * Gets the date last modified for the course.
   * @return - Date last modified for the course, as a string.
   */
  function getDateModified() {
    return this.dateModified;
  }
}
