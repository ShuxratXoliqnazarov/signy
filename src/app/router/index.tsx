import { createBrowserRouter } from 'react-router'
import { AboutPage } from '@/pages/about'
import { ArticlePage } from '@/pages/article'
import { BlogPage } from '@/pages/blog'
import { ContactsPage } from '@/pages/contacts'
import { FaqPage } from '@/pages/faq'
import { HomePage } from '@/pages/home'
import { NotFoundPage } from '@/pages/not-found'
import { VideosPage } from '@/pages/videos'
import { ROUTES } from '@/shared/config'
import { MainLayout } from '../layouts/MainLayout'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: ROUTES.HOME, element: <HomePage /> },
      { path: ROUTES.BLOG, element: <BlogPage /> },
      { path: ROUTES.ARTICLE, element: <ArticlePage /> },
      { path: ROUTES.VIDEOS, element: <VideosPage /> },
      { path: ROUTES.FAQ, element: <FaqPage /> },
      { path: ROUTES.ABOUT, element: <AboutPage /> },
      { path: ROUTES.CONTACTS, element: <ContactsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
