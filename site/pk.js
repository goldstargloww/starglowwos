async function getMembers(sysid) {
    var resp = await fetch(`https://api.pluralkit.me/v2/systems/${sysid}/members`);
    var data = await resp.json();
    return data;
}

