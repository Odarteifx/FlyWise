import flywiseColors from "./color";
import typography from "./typography";

const globalStyles = {
  container: {
    flex: 1,
    backgroundColor: flywiseColors.background,
  },
  spacer: {
    height: 20,
  },
  row: {
    flexDirection: 'row' as const,
  },
  column: {
    flexDirection: 'column' as const,
  },
  topcontainer: {
    
    backgroundColor: flywiseColors.secondary,
  },
  logo: {
   ...typography.heading,
   color: flywiseColors.background,
   paddingTop: 65,
  paddingHorizontal: 12,
  },
  headertext: {
   ...typography.subheading,
  },
  flighttype: {
    ...typography.body,
    color: flywiseColors.background,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  textinput: {
    ...typography.body,
    color: flywiseColors.background,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: flywiseColors.background,
    marginTop: 10,
    marginHorizontal: 12,
  },
};

export default globalStyles;