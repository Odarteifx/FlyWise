import flywiseColors from "./color";
import typography from "./typography";

const globalStyles = {
  container: {
    flex: 1,
    backgroundColor: flywiseColors.background,
  },
  spacer: {
    height: 5,
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
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  selectedFlightType: {
    color: flywiseColors.secondary,
  },
  flighttypeText: {
   ...typography.body,
   color: flywiseColors.quaternary,
  },
  selectedFlightTypeText: {
    ...typography.body,
    fontFamily: "Raleway_700Bold",
    color: flywiseColors.background,
  },
  textinput: {
    ...typography.body,
    color: flywiseColors.background,
   width: 180,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: flywiseColors.background,
    marginHorizontal: 5,
    
  },
};

export default globalStyles;