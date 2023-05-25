import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';

import Home from 'pages/Home';
import About from 'pages/About';
import Contact from 'pages/Contact';
import RelatedLiterature from 'pages/RelatedLiterature';

import Dashboard from 'components/Dashboard/Template/Dashboard';
import ContactContent from 'components/Dashboard/Contact/Content';
import ContactAdd from 'components/Dashboard/Contact/Add';
import ContactEdit from 'components/Dashboard/Contact/Edit';
import QAContent from 'components/Dashboard/QA/Content';
import QAAdd from 'components/Dashboard/QA/Add';
import QAEdit from 'components/Dashboard/QA/Edit';
import QATypeContent from 'components/Dashboard/QAType/Content';
import QATypeAdd from 'components/Dashboard/QAType/Add';
import QATypeEdit from 'components/Dashboard/QAType/Edit';
import NewsContent from 'components/Dashboard/News/Content';
import NewsAdd from 'components/Dashboard/News/Add';
import NewsEdit from 'components/Dashboard/News/Edit';
import NewsTypeContent from 'components/Dashboard/NewsType/Content';
import NewsTypeAdd from 'components/Dashboard/NewsType/Add';
import NewsTypeEdit from 'components/Dashboard/NewsType/Edit';
import LiteratureContent from 'components/Dashboard/Literature/Content';
import LiteratureAdd from 'components/Dashboard/Literature/Add';
import LiteratureEdit from 'components/Dashboard/Literature/Edit';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/:categoryId/:articleId" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/related-literature" element={<RelatedLiterature />} />
          <Route
            path="/dashboard/contact"
            element={<Dashboard content={<ContactContent />} />}
          />
          <Route
            path="/dashboard/contact/add"
            element={<Dashboard content={<ContactAdd />} />}
          />
          <Route
            path="/dashboard/contact/edit/:contactId"
            element={<Dashboard content={<ContactEdit />} />}
          />
          <Route
            path="/dashboard/qa"
            element={<Dashboard content={<QAContent />} />}
          />
          <Route
            path="/dashboard/qa/add"
            element={<Dashboard content={<QAAdd />} />}
          />
          <Route
            path="/dashboard/qa/edit/:qaId"
            element={<Dashboard content={<QAEdit />} />}
          />
          <Route
            path="/dashboard/qa-type"
            element={<Dashboard content={<QATypeContent />} />}
          />
          <Route
            path="/dashboard/qa-type/add"
            element={<Dashboard content={<QATypeAdd />} />}
          />
          <Route
            path="/dashboard/qa-type/edit/:qaTypeId"
            element={<Dashboard content={<QATypeEdit />} />}
          />
          <Route
            path="/dashboard/news"
            element={<Dashboard content={<NewsContent />} />}
          />
          <Route
            path="/dashboard/news/add"
            element={<Dashboard content={<NewsAdd />} />}
          />
          <Route
            path="/dashboard/news/edit/:newsId"
            element={<Dashboard content={<NewsEdit />} />}
          />
          <Route
            path="/dashboard/news-type"
            element={<Dashboard content={<NewsTypeContent />} />}
          />
          <Route
            path="/dashboard/news-type/add"
            element={<Dashboard content={<NewsTypeAdd />} />}
          />
          <Route
            path="/dashboard/news-type/edit/:qaTypeId"
            element={<Dashboard content={<NewsTypeEdit />} />}
          />
          <Route
            path="/dashboard/related-literature"
            element={<Dashboard content={<LiteratureContent />} />}
          />
          <Route
            path="/dashboard/related-literature/add"
            element={<Dashboard content={<LiteratureAdd />} />}
          />
          <Route
            path="/dashboard/related-literature/edit/:literatureId"
            element={<Dashboard content={<LiteratureEdit />} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
