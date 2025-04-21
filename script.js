fetch('data.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('avatar').src = data.avatar;

    const nameParts = data.name.split(' ');
    const lastName = nameParts.pop();
    document.getElementById('username').innerHTML = `${nameParts.join(' ')} <b>${lastName}</b>`;

    document.getElementById('description').textContent = data.description;

    const linksList = document.getElementById('links-list');
    data.links.slice(0, 5).forEach(link => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${link.url}" target="_blank">${link.label}</a>`;
      linksList.appendChild(li);
    });

    const socials = document.getElementById('socials');
    for (const [key, url] of Object.entries(data.socialLinks)) {
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Exibe "Linkedin", "Instagram", etc.
      socials.appendChild(a);
    }
  });
