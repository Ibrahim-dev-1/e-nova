import React from "react";
import { SEO } from "../components/seo";
import {
  ContentBox,
  PageWrapper,
  SidebarSection,
} from "../features/user-profile/user-profile.style";
import SettingsContent from "../features/user-profile/settings/settings";
import { Modal } from "@redq/reuse-modal";
import Sidebar from "../features/user-profile/sidebar/sidebar";

type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const ProfilePage: React.FC<Props> = ({ deviceType }) => {
  return (
    <>
      <Modal>
        <PageWrapper>
          <SidebarSection></SidebarSection>
          <SEO title="Profile - E-NOVA" description="Profile Details" />
          <SettingsContent deviceType={deviceType} />
        </PageWrapper>
      </Modal>
    </>
  );
};

export default ProfilePage;
