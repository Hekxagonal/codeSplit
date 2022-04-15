const mapDataPost = (data: any) => {
  return data.data.map((el: any) => {
    let type = el.attributes.type[0].__component;
    type = type.split('.');
    type = type[1];
    return {
      title: el.attributes.title,
      short_description: el.attributes.short_description,
      type,
      link: el.attributes.type[0].link || el.attributes.type[0].cover,
      content: el.attributes.type[0].content || '',
      createdAt: new Date(el.attributes.createdAt).toLocaleString(),
    };
  });
};

export default mapDataPost;

type data = { data: [{ attributes: { title: string; apiId: string } }] };

export const mapMenuData = (types: data, categories: data) => {
  return {
    types: types.data.map((el: any) => {
      if (el.category === 'post-type') {
        return el.apiId;
      }
    }),
    categories: categories.data.map((el: any) => {
      return el.attributes.title;
    }),
  };
};
