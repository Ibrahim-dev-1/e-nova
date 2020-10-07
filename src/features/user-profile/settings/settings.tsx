import React from "react";
import {
  SettingsForm,
  SettingsFormContent,
  HeadingSection,
  Title,
  Col,
  Row,
} from "./settings.style";

import { Button } from "../../../components/button/button";
import { Input } from "../../../components/forms/input";
import { Label } from "../../../components/forms/label";

import Contact from "../../contact/contact";
import Address from "../../address/address";

import { FormattedMessage } from "react-intl";

type SettingsContentProps = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const SettingsContent: React.FC<SettingsContentProps> = ({ deviceType }) => {
  return (
    <SettingsForm>
      <SettingsFormContent>
        <HeadingSection>
          <Title>
            <FormattedMessage
              id="profilePageTitle"
              defaultMessage="Your Profile"
            />
          </Title>
        </HeadingSection>
        <Row style={{ alignItems: "flex-end", marginBottom: "50px" }}>
          <Col xs={12} sm={5} md={5} lg={5}>
            <Label>
              <FormattedMessage
                id="profileNameField"
                defaultMessage="Your Name"
              />
            </Label>
            <Input
              type="text"
              label="Name"
              name="name"
              backgroundColor="#F7F7F7"
              height="48px"
              // intlInputLabelId="profileNameField"
            />
          </Col>

          <Col xs={12} sm={5} md={5} lg={5}>
            <Label>
              <FormattedMessage
                id="profileEmailField"
                defaultMessage="Your Email"
              />
            </Label>
            <Input
              type="email"
              name="email"
              label="Email Address"
              backgroundColor="#F7F7F7"
            />
          </Col>

          <Col xs={12} sm={2} md={2} lg={2}>
            <Button
              size="big"
              style={{ width: "100%" }}
              onClick={() => console.log("click profileSave")}
            >
              <FormattedMessage id="profileSaveBtn" defaultMessage="Save" />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <SettingsFormContent>
              <Contact />
            </SettingsFormContent>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} style={{ position: "relative" }}>
            <SettingsFormContent>
              <Address />
            </SettingsFormContent>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <SettingsFormContent>payement</SettingsFormContent>
          </Col>
        </Row>
      </SettingsFormContent>
    </SettingsForm>
  );
};

export default SettingsContent;
