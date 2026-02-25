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
  return (
    <Html>
      <Head />
      <Preview>
        New Portfolio Message from {first_name} {last_name}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Request</Heading>
          <Text style={text}>
            <strong>First Name:</strong> {first_name}
          </Text>
          <Text style={text}>
            <strong>Last Name:</strong> {last_name}
          </Text>
          <Text style={text}>
            <strong>Email:</strong> {email}
          </Text>
          <Hr style={hr} />
          <Section>
            <Text style={text}>
              <strong>Message:</strong>
            </Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 40px 40px",
  borderRadius: "8px",
  border: "1px solid #eaeaea",
  marginTop: "40px",
  maxWidth: "600px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  paddingBottom: "10px",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
  marginBottom: "10px",
};

const messageText = {
  color: "#444",
  fontSize: "15px",
  lineHeight: "24px",
  backgroundColor: "#f9f9f9",
  padding: "16px",
  borderRadius: "8px",
  whiteSpace: "pre-wrap" as const,
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

export default ContactEmail;
