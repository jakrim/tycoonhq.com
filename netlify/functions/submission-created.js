const {Client} = require("@notionhq/client");

exports.handler = async function (event) {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  const form = JSON.parse(event.body).payload.data;
  console.log(form)
  const new_row = {
    parent: {
      database_id: process.env.NOTION_DATABASE_ID
    },
    properties: {
          email: {
            email: form.email,
          },
      },
  }
  await notion.pages.create(new_row);
  return {
    statusCode: 200
  }
}