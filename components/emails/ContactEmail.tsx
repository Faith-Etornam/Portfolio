import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Row,
  Column,
  Link,
} from "@react-email/components";

interface ContactEmailProps {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
}

const ContactEmail = ({
  first_name,
  last_name,
  email,
  message,
}: ContactEmailProps) => {
  const fullName = `${first_name} ${last_name}`;

  return (
    <Html>
      <Head />
      <Preview>New Portfolio Message from {fullName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={headerText}>Portfolio Contact</Text>
          </Section>

          <Section style={content}>
            <Heading style={heading}>You have a new message</Heading>
            <Text style={paragraph}>
              Someone reached out through the contact form on your website. Here
              are the details of their submission:
            </Text>

            <Section style={detailsBox}>
              <Row style={detailRow}>
                <Column style={detailLabel}>Name:</Column>
                <Column style={detailValue}>{fullName}</Column>
              </Row>
              <Row style={detailRow}>
                <Column style={detailLabel}>Email:</Column>
                <Column style={detailValue}>
                  <Link href={`mailto:${email}`} style={link}>
                    {email}
                  </Link>
                </Column>
              </Row>
            </Section>

            <Hr style={hr} />

            <Section>
              <Text style={messageLabel}>Message</Text>
              <Text style={messageText}>{message}</Text>
            </Section>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              This is a message sent from your portfolio website.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f8fafc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: "40px 0",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
  border: "1px solid #e2e8f0",
  maxWidth: "600px",
};

const header = {
  backgroundColor: "#0f172a",
  padding: "24px",
  textAlign: "center" as const,
};

const headerText = {
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: "600",
  margin: "0",
  letterSpacing: "0.5px",
};

const content = {
  padding: "32px",
};

const heading = {
  color: "#0f172a",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 16px",
};

const paragraph = {
  color: "#475569",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 24px",
};

const detailsBox = {
  backgroundColor: "#f1f5f9",
  padding: "20px",
  borderRadius: "8px",
  marginBottom: "24px",
};

const detailRow = {
  marginBottom: "12px",
};

const detailLabel = {
  color: "#64748b",
  fontSize: "15px",
  fontWeight: "600",
  width: "80px",
};

const detailValue = {
  color: "#0f172a",
  fontSize: "15px",
  fontWeight: "500",
};

const link = {
  color: "#2563eb",
  textDecoration: "none",
};

const hr = {
  borderColor: "#e2e8f0",
  margin: "24px 0",
};

const messageLabel = {
  color: "#0f172a",
  fontSize: "16px",
  fontWeight: "600",
  marginBottom: "12px",
};

const messageText = {
  color: "#334155",
  fontSize: "16px",
  lineHeight: "26px",
  backgroundColor: "#ffffff",
  borderLeft: "4px solid #3b82f6",
  padding: "16px 20px",
  margin: "0",
  borderRadius: "0 8px 8px 0",
  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  whiteSpace: "pre-wrap" as const,
};

const footer = {
  backgroundColor: "#f8fafc",
  padding: "24px",
  textAlign: "center" as const,
  borderTop: "1px solid #e2e8f0",
};

const footerText = {
  color: "#94a3b8",
  fontSize: "13px",
  margin: "0",
};

export default ContactEmail;
