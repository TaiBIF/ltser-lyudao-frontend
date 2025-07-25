import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from 'components/Header/Content';
import Footer from 'components/Footer/Content';

import Home from 'pages/Home';
import About from 'pages/About';
import Contact from 'pages/Contact';
import RelatedLiterature from 'pages/RelatedLiterature';
import FormLink from 'pages/FormLink';
import EcologicalObservation from 'pages/SiteData/EcologicalObservation';
import ThirdPartyObservation from 'pages/SiteData/ThirdPartyObservation';
import EnvironmentalObservation from 'pages/SiteData/EnvironmentalObservation';
import ResetPsw from 'pages/Auth/ResetPsw';
import VerifyEmailSuccess from 'pages/Auth/VerifyEmailSuccess';
import VerifyEmail from 'pages/Auth/VerifyEmail';
import Terms from 'pages/Terms';
import NewsContent from 'pages/News/Content';
import NewsDetail from 'pages/News/Detail';
import QA from 'pages/QA';
import InterviewContent from 'pages/SiteData/SocialObservation/Interview/Content';
import InterviewDetail from 'pages/SiteData/SocialObservation/Interview/Detail';
import SocialObservation from 'pages/SiteData/SocialObservation/SocialObservation';

import Dashboard from 'components/Dashboard/Template/Dashboard';
import DashboardAboutContent from 'components/Dashboard/About/Content';
import DashboardAboutAdd from 'components/Dashboard/About/Add';
import DashboardAboutEdit from 'components/Dashboard/About/Edit';
import DashboardAboutAttachmentContent from 'components/Dashboard/AboutAttachment/Content';
import DashboardAboutAttachmentAdd from 'components/Dashboard/AboutAttachment/Add';
import DashboardAboutAttachmentEdit from 'components/Dashboard/AboutAttachment/Edit';
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
import DashboardDownloadRecord from 'components/Dashboard/DownloadRecord';
import DashboardUserEdit from 'components/Dashboard/User/Edit';
import DashboardVisitorContent from 'components/Dashboard/Visitors/Content';
import DashboardVisitorAdd from 'components/Dashboard/Visitors/Add';
import DashboardVisitorEdit from 'components/Dashboard/Visitors/Edit';
import DashboardSocialInterviewDataContent from 'components/Dashboard/SocialInterviewData/Content';
import DashboardSocialInterviewDataEdit from 'components/Dashboard/SocialInterviewData/Edit';
import DashboardSocialInterviewDataAdd from 'components/Dashboard/SocialInterviewData/Add';

import { HeaderProvider } from 'context/HeaderContext';
import { EcoProvider } from 'context/EcoContext';
import { SurveyMapProvider } from 'context/SurveyMapContext';
import { DataProvider } from 'context/DataContext';
import { SiteDataProvider } from 'context/SiteDataContext';
import { AuthProvider } from 'context/AuthContext';

import PrivateRoute from 'utils/PrivateRoute';
import Placeholder from 'components/Placeholder';
import { LangProvider } from 'context/LangContext';
import PrivacyPolicy from 'pages/PrivacyPolicy';
import Fishing from 'pages/SiteData/SocialObservation/Fishing';
import { FilterProvider } from 'context/SocialEconomyData/FilterContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderProvider>
          <LangProvider>
            <AuthProvider>
              <Header />
              <Routes>
                <Route
                  path="/"
                  element={
                    <SiteDataProvider>
                      <SurveyMapProvider>
                        <DataProvider>
                          <Home />
                        </DataProvider>
                      </SurveyMapProvider>
                    </SiteDataProvider>
                  }
                />
                <Route path="/about/:categoryId" element={<About />} />
                <Route path="/about/:categoryId/:aboutId" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="/related-literature"
                  element={<RelatedLiterature />}
                />
                <Route path="/news" element={<NewsContent />} />
                <Route path="/news/:newsId" element={<NewsDetail />} />
                <Route path="/qa" element={<QA />} />
                <Route
                  path="/site-data/ecological-observation/native"
                  element={
                    <SiteDataProvider>
                      <SurveyMapProvider>
                        <DataProvider>
                          <EcoProvider>
                            <EcologicalObservation />
                          </EcoProvider>
                        </DataProvider>
                      </SurveyMapProvider>
                    </SiteDataProvider>
                  }
                />
                <Route
                  path="/site-data/ecological-observation/native/:dataId"
                  element={
                    <SiteDataProvider>
                      <SurveyMapProvider>
                        <DataProvider>
                          <EcoProvider>
                            <EcologicalObservation />
                          </EcoProvider>
                        </DataProvider>
                      </SurveyMapProvider>
                    </SiteDataProvider>
                  }
                />
                <Route
                  path="/site-data/ecological-observation/third-party"
                  element={
                    <SiteDataProvider>
                      <SurveyMapProvider>
                        <DataProvider>
                          <EcoProvider>
                            <ThirdPartyObservation />
                          </EcoProvider>
                        </DataProvider>
                      </SurveyMapProvider>
                    </SiteDataProvider>
                  }
                />
                <Route
                  path="/site-data/ecological-observation/third-party/:dataId"
                  element={
                    <SiteDataProvider>
                      <SurveyMapProvider>
                        <DataProvider>
                          <EcoProvider>
                            <ThirdPartyObservation />
                          </EcoProvider>
                        </DataProvider>
                      </SurveyMapProvider>
                    </SiteDataProvider>
                  }
                />
                <Route
                  path="/site-data/environmental-observation/"
                  element={
                    <SiteDataProvider>
                      <SurveyMapProvider>
                        <DataProvider>
                          <EcoProvider>
                            <EnvironmentalObservation />
                          </EcoProvider>
                        </DataProvider>
                      </SurveyMapProvider>
                    </SiteDataProvider>
                  }
                />
                <Route
                  path="/site-data/environmental-observation/:dataId"
                  element={
                    <SiteDataProvider>
                      <SurveyMapProvider>
                        <DataProvider>
                          <EcoProvider>
                            <EnvironmentalObservation />
                          </EcoProvider>
                        </DataProvider>
                      </SurveyMapProvider>
                    </SiteDataProvider>
                  }
                />
                <Route
                  path="/site-data/social-observation/social-interview-data"
                  element={
                    <FilterProvider>
                      <InterviewContent />
                    </FilterProvider>
                  }
                />
                <Route
                  path="/site-data/social-observation/social-interview-data/:interviewId"
                  element={
                    <FilterProvider>
                      <InterviewDetail />
                    </FilterProvider>
                  }
                />
                <Route
                  path="/site-data/social-observation/:dataId"
                  element={
                    <SiteDataProvider>
                      <SurveyMapProvider>
                        <DataProvider>
                          <EcoProvider>
                            <Fishing />
                          </EcoProvider>
                        </DataProvider>
                      </SurveyMapProvider>
                    </SiteDataProvider>
                  }
                />
                <Route
                  path="/site-data/social-observation/socioeconomic-data/"
                  element={<SocialObservation />}
                />
                <Route
                  path="/site-data/social-observation/socioeconomic-data/:dataId"
                  element={<SocialObservation />}
                />

                <Route path="/reset-password" element={<ResetPsw />} />
                <Route path="/verify-email" element={<VerifyEmail />} />
                <Route
                  path="/verify-email-success"
                  element={<VerifyEmailSuccess />}
                />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route
                  path="/form-link"
                  element={
                    <PrivateRoute
                      roles={['social_project_staff', 'staff', 'superuser']}
                      redirectPath="/"
                    >
                      <FormLink />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/form-link"
                  element={
                    <PrivateRoute
                      roles={['social_project_staff', 'staff', 'superuser']}
                      redirectPath="/login"
                    >
                      <FormLink />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/user/edit/"
                  element={
                    <PrivateRoute
                      roles={[
                        'none',
                        'social_project_staff',
                        'staff',
                        'superuser',
                      ]}
                      redirectPath="/"
                    >
                      <Dashboard content={<DashboardUserEdit />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/about"
                  element={
                    <PrivateRoute
                      roles={['social_project_staff', 'staff', 'superuser']}
                      redirectPath="/"
                    >
                      <Dashboard content={<DashboardAboutContent />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/about/add"
                  element={
                    <PrivateRoute
                      roles={['social_project_staff', 'staff', 'superuser']}
                      redirectPath="/"
                    >
                      <Dashboard content={<DashboardAboutAdd />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/about/edit/:aboutId"
                  element={
                    <PrivateRoute
                      roles={['social_project_staff', 'staff', 'superuser']}
                      redirectPath="/"
                    >
                      <Dashboard content={<DashboardAboutEdit />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/about-attachment"
                  element={
                    <PrivateRoute
                      roles={['social_project_staff', 'staff', 'superuser']}
                      redirectPath="/"
                    >
                      <Dashboard
                        content={<DashboardAboutAttachmentContent />}
                      />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/about-attachment/add"
                  element={
                    <PrivateRoute
                      roles={['social_project_staff', 'staff', 'superuser']}
                      redirectPath="/"
                    >
                      <Dashboard content={<DashboardAboutAttachmentAdd />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/about-attachment/edit/:aboutAttachmentId"
                  element={
                    <PrivateRoute
                      roles={['social_project_staff', 'staff', 'superuser']}
                      redirectPath="/"
                    >
                      <Dashboard content={<DashboardAboutAttachmentEdit />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/news"
                  element={
                    <PrivateRoute
                      roles={['social_project_staff', 'staff', 'superuser']}
                      redirectPath="/"
                    >
                      <Dashboard content={<DashboardNewsContent />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/news/add"
                  element={
                    <PrivateRoute
                      roles={['social_project_staff', 'staff', 'superuser']}
                      redirectPath="/"
                    >
                      <Dashboard content={<DashboardNewsAdd />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/news/edit/:newsId"
                  element={
                    <PrivateRoute
                      roles={['social_project_staff', 'staff', 'superuser']}
                      redirectPath="/"
                    >
                      <Dashboard content={<DashboardNewsEdit />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/news-type"
                  element={
                    <PrivateRoute
                      roles={['social_project_staff', 'staff', 'superuser']}
                      redirectPath="/"
                    >
                      <Dashboard content={<DashboardNewsTypeContent />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/news-type/add"
                  element={
                    <PrivateRoute
                      roles={['social_project_staff', 'staff', 'superuser']}
                      redirectPath="/"
                    >
                      <Dashboard content={<DashboardNewsTypeAdd />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/news-type/edit/:newsTypeId"
                  element={
                    <PrivateRoute
                      roles={['social_project_staff', 'staff', 'superuser']}
                      redirectPath="/"
                    >
                      <Dashboard content={<DashboardNewsTypeEdit />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/related-literature"
                  element={
                    <PrivateRoute
                      roles={['social_project_staff', 'staff', 'superuser']}
                      redirectPath="/"
                    >
                      <Dashboard content={<DashboardLiteratureContent />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/related-literature/add"
                  element={
                    <PrivateRoute
                      roles={['social_project_staff', 'staff', 'superuser']}
                      redirectPath="/"
                    >
                      <Dashboard content={<DashboardLiteratureAdd />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/related-literature/edit/:literatureId"
                  element={
                    <PrivateRoute
                      roles={['social_project_staff', 'staff', 'superuser']}
                      redirectPath="/"
                    >
                      <Dashboard content={<DashboardLiteratureEdit />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/download-record"
                  element={
                    <PrivateRoute
                      roles={[
                        'none',
                        'social_project_staff',
                        'staff',
                        'superuser',
                      ]}
                      redirectPath="/"
                    >
                      <Dashboard content={<DashboardDownloadRecord />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/contact"
                  element={
                    <PrivateRoute
                      roles={['superuser']}
                      redirectPath="/dashboard/about"
                    >
                      <Dashboard content={<DashboardContactContent />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/contact/add"
                  element={
                    <PrivateRoute
                      roles={['superuser']}
                      redirectPath="/dashboard/about"
                    >
                      <Dashboard content={<DashboardContactAdd />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/contact/edit/:contactId"
                  element={
                    <PrivateRoute
                      roles={['superuser']}
                      redirectPath="/dashboard/about"
                    >
                      <Dashboard content={<DashboardContactEdit />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/qa"
                  element={
                    <PrivateRoute
                      roles={['superuser']}
                      redirectPath="/dashboard/about"
                    >
                      <Dashboard content={<DashboardQAContent />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/qa/add"
                  element={
                    <PrivateRoute
                      roles={['superuser']}
                      redirectPath="/dashboard/about"
                    >
                      <Dashboard content={<DashboardQAAdd />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/qa/edit/:qaId"
                  element={
                    <PrivateRoute
                      roles={['superuser']}
                      redirectPath="/dashboard/about"
                    >
                      <Dashboard content={<DashboardQAEdit />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/qa-type"
                  element={
                    <PrivateRoute
                      roles={['superuser']}
                      redirectPath="/dashboard/about"
                    >
                      <Dashboard content={<DashboardQATypeContent />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/qa-type/add"
                  element={
                    <PrivateRoute
                      roles={['superuser']}
                      redirectPath="/dashboard/about"
                    >
                      <Dashboard content={<DashboardQATypeAdd />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/qa-type/edit/:qaTypeId"
                  element={
                    <PrivateRoute
                      roles={['superuser']}
                      redirectPath="/dashboard/about"
                    >
                      <Dashboard content={<DashboardQATypeEdit />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/form-link"
                  element={
                    <PrivateRoute
                      roles={['superuser']}
                      redirectPath="/dashboard/about"
                    >
                      <Dashboard content={<DashboardFormLinkContent />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/form-link/add"
                  element={
                    <PrivateRoute
                      roles={['superuser']}
                      redirectPath="/dashboard/about"
                    >
                      <Dashboard content={<DashboardFormLinkAdd />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/form-link/edit/:formLinkId"
                  element={
                    <PrivateRoute
                      roles={['superuser']}
                      redirectPath="/dashboard/about"
                    >
                      <Dashboard content={<DashboardFormLinkEdit />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/download"
                  element={
                    <PrivateRoute
                      roles={['superuser', 'social_project_staff', 'staff']}
                      redirectPath="/dashboard/about"
                    >
                      <Dashboard content={<DashboardDownload />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/social-interview-data"
                  element={
                    <PrivateRoute roles={['superuser']} redirectPath="/">
                      <Dashboard
                        content={<DashboardSocialInterviewDataContent />}
                      />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/social-interview-data/add/"
                  element={
                    <PrivateRoute roles={['superuser']} redirectPath="/">
                      <Dashboard
                        content={<DashboardSocialInterviewDataAdd />}
                      />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/social-interview-data/edit/:id"
                  element={
                    <PrivateRoute roles={['superuser']} redirectPath="/">
                      <Dashboard
                        content={<DashboardSocialInterviewDataEdit />}
                      />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/visitors"
                  element={
                    <PrivateRoute
                      roles={['social_project_staff', 'superuser']}
                      redirectPath="/"
                    >
                      <Dashboard content={<DashboardVisitorContent />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/visitors/add"
                  element={
                    <PrivateRoute
                      roles={['social_project_staff', 'superuser']}
                      redirectPath="/"
                    >
                      <Dashboard content={<DashboardVisitorAdd />} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard/visitors/edit/:visitorId"
                  element={
                    <PrivateRoute
                      roles={['social_project_staff', 'superuser']}
                      redirectPath="/"
                    >
                      <Dashboard content={<DashboardVisitorEdit />} />
                    </PrivateRoute>
                  }
                />
                <Route path="/oauth/callback" element={<Placeholder />} />
              </Routes>
              <Footer />
            </AuthProvider>
          </LangProvider>
        </HeaderProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
