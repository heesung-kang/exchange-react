export default function isIE() {
  const myNav = navigator.userAgent.toLowerCase()
  return myNav.indexOf('msie') != -1 ? parseInt(myNav.split('msie')[1]) : false
}
