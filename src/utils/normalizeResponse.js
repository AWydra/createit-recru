const normalizeResponse = (res) => {
  return res.feed.entry.map((arr) => ({
    id: arr.id?.attributes['im:id'],
    category: arr.category?.attributes?.label,
    artist: arr['im:artist']?.label,
    image: arr['im:image'][2].label.replace('113x170bb.png', '460x0w.jpg'),
    title: arr['im:name']?.label,
    price: arr['im:price']?.label,
    date: arr['im:releaseDate']?.attributes?.label,
    buttons: arr.link.map((link) => ({
      title: link.attributes.title || 'Check on iTunes',
      href: link.attributes.href,
    })),
    desc: arr.summary?.label,
    rights: arr.rights?.label,
  }));
};

export default normalizeResponse;
