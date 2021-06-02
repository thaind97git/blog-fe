import React from 'react';

import { getResumeSections } from '@/apis/resume';
import { getProfile } from '@/apis/profile';

import Resume from '@/components/Resume';
import Skeleton from '@/components/Skeleton';
import EmptyRecord from '@/components/Empty-Record';
import useGet from '@/hooks/useGet';

import { listResumeMapper } from '@/helpers/mapper';

const Home = () => {
  const { data: resumes, fetching: fetchingResumes } = useGet({
    func: getResumeSections,
  });

  const { data: profile, fetching: fetchingProfile } = useGet({
    func: getProfile,
  });

  if (fetchingResumes || fetchingProfile) {
    return <Skeleton />;
  }

  const sectionResumes = listResumeMapper(resumes?.results);

  if (!sectionResumes?.length) {
    return <EmptyRecord title="Not found any information" />;
  }

  return (
    <div className="home">
      <Resume sections={sectionResumes} profile={profile} />
    </div>
  );
};

export default Home;
