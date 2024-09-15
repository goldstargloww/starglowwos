// code by greysdawn https://codepen.io/greysdawn/pen/ZEZXEzR


// useful for debugging
function sleep() {
    return new Promise((res, rej) => {
      setTimeout(() => res(), 1000);
    });
  }

async function changeAvatars() {
  // set your system id for easy referencing
  var sysid = "mttho";

  // fetch the info from the api
  var resp = await fetch(
    `https://api.pluralkit.me/v2/systems/${sysid}/members`
  );
  // extract the data from the response
  var members = await resp.json();

  // creating a pause so the change is easier to see - use for debugging
  // await sleep();

  // handle the avatar changing
  for (var m of members) {
    var element = document.getElementById(`${m.id}-avatar`); // grab element

    if (!element) continue; // doesn't exist? ignore it!
    
    if (m.webhook_avatar_url) {
      element.src = m.webhook_avatar_url;
    } else if (m.avatar_url) {
      element.src = m.avatar_url; // or change it, if it does exist
    } else {
      continue
    }
  }
  console.log("all avatars changed!")
}

changeAvatars();
