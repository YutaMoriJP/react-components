import GlobalStyles from "./styled/GlobalStyle";
import Container from "./styled/Container";
import Component from "./Components/index";
import components from "./data/components";
import Intro from "./Intro";
import useOpen from "./useOpen";
import { Modal } from "kantan-components";
import { useEffect } from "react";
import { Text, Row } from "kantan-style";

const Message = () => {
  const { open, onOpen, onClose } = useOpen();
  useEffect(() => {
    onOpen();
  }, [onOpen]);
  return (
    <>
      {open ? (
        <Modal handleClose={onClose}>
          <div style={{ background: "white", borderRadius: "8px" }}>
            <Row justify="center" align="center">
              <Text style={{ lineHeight: "25px" }}>
                Thanks for visting this page. The project is currently being
                re-built as a library. The doc is still work-in-progress, and
                can be found{" "}
                <a
                  href="https://kantan-components-docs.netlify.app/docs/intro"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </Text>
            </Row>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default function App() {
  return (
    <>
      <Message />
      <GlobalStyles />
      <Container>
        <Intro>
          Click on the `+` icon to learn more about the React component. The
          Demo involves an example of what the React component does, and you can
          see the source code by clicking on the CodeSandbox link.
        </Intro>
        {components.map((component, index) => (
          <Component key={component.id} index={index + 1} {...component} />
        ))}
      </Container>
    </>
  );
}
