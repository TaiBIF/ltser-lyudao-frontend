import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from 'components/Header/Content';
import Footer from 'components/Footer';

import Home from 'pages/Home';
import About from 'pages/About';
import Contact from 'pages/Contact';
import RelatedLiterature from 'pages/RelatedLiterature';
import FormLink from 'pages/FormLink';
import EcologicalObservation from 'pages/SiteData/EcologicalObservation';
import ForgotPsw from 'pages/Auth/ForgotPsw';
import MailVerification from 'pages/Auth/MailVerification';
import MailVerificationSuccess from 'pages/Auth/MailVerificationSuccess';
import Terms from 'pages/Terms';
import NewsContent from 'pages/News/Content';
import NewsDetail from 'pages/News/Detail';
import QA from 'pages/QA';

import Dashboard from 'components/Dashboard/Template/Dashboard';
import DashboardAboutContent from 'components/Dashboard/About/Content';
import DashboardAboutAdd from 'components/Dashboard/About/Add';
import DashboardAboutEdit from 'components/Dashboard/About/Edit';
import DashboardContactContent from 'components/Dashboard/Contact/Content';
import DashboardContactAdd from 'components/Dashboard/Contact/Add';
import DashboardContactEdit from 'components/Dashboard/Contact/Edit';
import DashboardQAContent from 'components/Dashboard/QA/Content';
import DashboardQAAdd from 'components/Dashboard/QA/Add';
import DashboardQAEdit from 'components/Dashboard/QA/Edit';
import DashboardQATypeContent from 'components/Dashboard/QAType/Content';
import DashboardQATypeAdd from 'components/Dashboard/QAType/Add';
import DashboardQATypeEdit from 'components/Dashboard/QAType/Edit';
import DashboardNewsContent from 'components/Dashboard/News/Content';
import DashboardNewsAdd from 'components/Dashboard/News/Add';
import DashboardNewsEdit from 'components/Dashboard/News/Edit';
import DashboardNewsTypeContent from 'components/Dashboard/NewsType/Content';
import DashboardNewsTypeAdd from 'components/Dashboard/NewsType/Add';
import DashboardNewsTypeEdit from 'components/Dashboard/NewsType/Edit';
import DashboardLiteratureContent from 'components/Dashboard/Literature/Content';
import DashboardLiteratureAdd from 'components/Dashboard/Literature/Add';
import DashboardLiteratureEdit from 'components/Dashboard/Literature/Edit';
import DashboardFormLinkContent from 'components/Dashboard/FormLink/Content';
import DashboardFormLinkAdd from 'components/Dashboard/FormLink/Add';
import DashboardFormLinkEdit from 'components/Dashboard/FormLink/Edit';
import DashboardDownload from 'components/Dashboard/Download';

import { HeaderProvider } from 'context/HeaderContext';
import { EcoProvider } from 'context/EcoContext';
import { SurveyMapProvider } from 'context/SurveyMapContext';
import { DataProvider } from 'context/DataContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderProvider>
          <Header />
        </HeaderProvider>
        <Routes>
          <Route
            path="/"
            element={
              <SurveyMapProvider>
                <DataProvider>
                  <Home />
                </DataProvider>
              </SurveyMapProvider>
            }
          />
          <Route path="/about/:categoryId/:aboutId" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/related-literature" element={<RelatedLiterature />} />
          <Route path="/form-link" element={<FormLink />} />
          <Route path="/news" element={<NewsContent />} />
          <Route path="/news/:newsId" element={<NewsDetail />} />
          <Route path="/qa" element={<QA />} />
          <Route
            path="/site-data/ecological-observation/:dataId"
            element={
              <SurveyMapProvider>
                <DataProvider>
                  <EcoProvider>
                    <EcologicalObservation />
                  </EcoProvider>
                </DataProvider>
              </SurveyMapProvider>
            }
          />
          <Route
            path="/site-data/environmental-observation"
            element={
              <SurveyMapProvider>
                <DataProvider>
                  <EcoProvider>
                    <EcologicalObservation />
                  </EcoProvider>
                </DataProvider>
              </SurveyMapProvider>
            }
          />
          <Route path="/forgot-password" element={<ForgotPsw />} />
          <Route path="/mail-verification" element={<MailVerification />} />
          <Route
            path="/mail-verification-success"
            element={<MailVerificationSuccess />}
          />
          <Route path="/terms" element={<Terms />} />
          <Route
            path="/dashboard/about"
            element={<Dashboard content={<DashboardAboutContent />} />}
          />
          <Route
            path="/dashboard/about/add"
            element={<Dashboard content={<DashboardAboutAdd />} />}
          />
          <Route
            path="/dashboard/about/edit/:aboutId"
            element={<Dashboard content={<DashboardAboutEdit />} />}
          />
          <Route
            path="/dashboard/contact"
            element={<Dashboard content={<DashboardContactContent />} />}
          />
          <Route
            path="/dashboard/contact/add"
            element={<Dashboard content={<DashboardContactAdd />} />}
          />
          <Route
            path="/dashboard/contact/edit/:contactId"
            element={<Dashboard content={<DashboardContactEdit />} />}
          />
          <Route
            path="/dashboard/qa"
            element={<Dashboard content={<DashboardQAContent />} />}
          />
          <Route
            path="/dashboard/qa/add"
            element={<Dashboard content={<DashboardQAAdd />} />}
          />
          <Route
            path="/dashboard/qa/edit/:qaId"
            element={<Dashboard content={<DashboardQAEdit />} />}
          />
          <Route
            path="/dashboard/qa-type"
            element={<Dashboard content={<DashboardQATypeContent />} />}
          />
          <Route
            path="/dashboard/qa-type/add"
            element={<Dashboard content={<DashboardQATypeAdd />} />}
          />
          <Route
            path="/dashboard/qa-type/edit/:qaTypeId"
            element={<Dashboard content={<DashboardQATypeEdit />} />}
          />
          <Route
            path="/dashboard/news"
            element={<Dashboard content={<DashboardNewsContent />} />}
          />
          <Route
            path="/dashboard/news/add"
            element={<Dashboard content={<DashboardNewsAdd />} />}
          />
          <Route
            path="/dashboard/news/edit/:newsId"
            element={<Dashboard content={<DashboardNewsEdit />} />}
          />
          <Route
            path="/dashboard/news-type"
            element={<Dashboard content={<DashboardNewsTypeContent />} />}
          />
          <Route
            path="/dashboard/news-type/add"
            element={<Dashboard content={<DashboardNewsTypeAdd />} />}
          />
          <Route
            path="/dashboard/news-type/edit/:qaTypeId"
            element={<Dashboard content={<DashboardNewsTypeEdit />} />}
          />
          <Route
            path="/dashboard/related-literature"
            element={<Dashboard content={<DashboardLiteratureContent />} />}
          />
          <Route
            path="/dashboard/related-literature/add"
            element={<Dashboard content={<DashboardLiteratureAdd />} />}
          />
          <Route
            path="/dashboard/related-literature/edit/:literatureId"
            element={<Dashboard content={<DashboardLiteratureEdit />} />}
          />
          <Route
            path="/dashboard/form-link"
            element={<Dashboard content={<DashboardFormLinkContent />} />}
          />
          <Route
            path="/dashboard/form-link/add"
            element={<Dashboard content={<DashboardFormLinkAdd />} />}
          />
          <Route
            path="/dashboard/form-link/edit/:formLinkId"
            element={<Dashboard content={<DashboardFormLinkEdit />} />}
          />
          <Route
            path="/dashboard/download"
            element={<Dashboard content={<DashboardDownload />} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
