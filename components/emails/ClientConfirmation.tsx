import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ClientConfirmationEmailProps {
  first_name: string;
}

const year = new Date().getFullYear()

export const ClientConfirmationEmail = ({
  first_name,
}: ClientConfirmationEmailProps) => (
  <Html>
    <Head />
    <Preview>Message Received — Faith Etornam</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Text style={logoText}>FE</Text>
        </Section>

        <Section style={card}>
          <Heading style={h1}>Hello {first_name},</Heading>
          <Text style={text}>
            Thank you for reaching out. I’ve received your inquiry and wanted to
            confirm that it’s being reviewed.
          </Text>

          <Text style={text}>
            As a developer focused on building high-performance systems, I value
            clear communication. You can expect a detailed response from me
            within **24 to 48 hours**.
          </Text>

          <Section style={btnContainer}>
            <Link style={button} href="https://faithetornam.com">
              Visit My Portfolio
            </Link>
          </Section>

          <Hr style={hr} />

          <Text style={footerHeader}>Direct Contact</Text>
          <Text style={footerLink}>hello@faithetornam.com</Text>
          <Text style={footerLink}>Accra, Ghana</Text>
        </Section>

        <Text style={copyright}>
          © {year} Faith Etornam Gbadegbe. Built with precision.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ClientConfirmationEmail;


const main = {
  backgroundColor: "#f4f4f7",
  fontFamily:
    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  width: "600px",
};

const logoContainer = {
  textAlign: "center" as const,
  marginBottom: "24px",
};

const logoText = {
  fontSize: "28px",
  fontWeight: "800",
  letterSpacing: "-1px",
  color: "#1a1a1a",
  margin: "0",
};

const card = {
  backgroundColor: "#ffffff",
  border: "1px solid #e1e4e8",
  borderRadius: "12px",
  padding: "40px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
};

const h1 = {
  color: "#1a1a1a",
  fontSize: "22px",
  fontWeight: "700",
  lineHeight: "1.3",
  margin: "0 0 20px",
};

const text = {
  color: "#444",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 20px",
};

const btnContainer = {
  margin: "30px 0",
};

const button = {
  backgroundColor: "#1a1a1a", 
  borderRadius: "6px",
  color: "#fff",
  fontSize: "15px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
};

const hr = {
  borderColor: "#f0f0f0",
  margin: "30px 0",
};

const footerHeader = {
  fontSize: "13px",
  fontWeight: "700",
  color: "#1a1a1a",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  marginBottom: "4px",
};

const footerLink = {
  fontSize: "14px",
  color: "#666",
  margin: "0",
};

const copyright = {
  textAlign: "center" as const,
  fontSize: "12px",
  color: "#999",
  marginTop: "30px",
};
