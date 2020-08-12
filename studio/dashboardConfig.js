export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f33a74f84171a6110c0afa8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-7aq1gfj1',
                  apiId: 'ae9bf1dd-1a4c-407f-bff4-cf6c77555e89'
                },
                {
                  buildHookId: '5f33a74f84171a634ec0b121',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-z3krzq5z',
                  apiId: 'f171d2b0-8e80-46de-938f-174ae0b58d80'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rudilund/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-z3krzq5z.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
