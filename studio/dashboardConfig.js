export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '629b1bfebf1f715119722325',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-kmztcca2',
                  apiId: 'd19f3946-6dcc-413c-b3ec-f6b19f40bbba'
                },
                {
                  buildHookId: '629b1bfe09b18d505ccf7755',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-8asejews',
                  apiId: '50e4ad12-90ad-4929-a397-79f218e469a8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/woxpillar/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-8asejews.netlify.app', category: 'apps'}
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
