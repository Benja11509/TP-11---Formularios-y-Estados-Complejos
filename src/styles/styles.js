import { StyleSheet } from "react-native";

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0B1020"
  },
  container: {
    flexGrow: 1,
    width: "100%",
    maxWidth: 560,
    alignSelf: "center",
    padding: 24,
    paddingTop: 56,
    paddingBottom: 40
  },
  brand: {
    color: "#63E6BE",
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 3,
    marginBottom: 10
  },
  heading: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 8
  },
  description: {
    color: "#B7BDCC",
    fontSize: 16,
    lineHeight: 23,
    marginBottom: 26
  },
  savedBox: {
    backgroundColor: "#151D32",
    borderWidth: 1,
    borderColor: "#28344F",
    borderRadius: 12,
    padding: 12,
    marginBottom: 18
  },
  savedText: {
    color: "#B7BDCC",
    fontSize: 13
  },
  field: {
    marginBottom: 18
  },
  label: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 8
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#39445D",
    borderRadius: 12,
    backgroundColor: "#151D32",
    color: "#FFFFFF",
    paddingHorizontal: 15,
    fontSize: 16
  },
  inputError: {
    borderColor: "#FF6B6B"
  },
  error: {
    color: "#FF8585",
    fontSize: 13,
    marginTop: 6
  },
  options: {
    flexDirection: "row",
    gap: 10
  },
  option: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: "#39445D",
    borderRadius: 12,
    backgroundColor: "#151D32",
    alignItems: "center",
    justifyContent: "center"
  },
  optionSelected: {
    backgroundColor: "#63E6BE",
    borderColor: "#63E6BE"
  },
  optionText: {
    color: "#DDE2EC",
    fontWeight: "800"
  },
  optionTextSelected: {
    color: "#0B1020"
  },
  primaryButton: {
    height: 54,
    borderRadius: 13,
    backgroundColor: "#63E6BE",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8
  },
  disabledButton: {
    opacity: 0.45
  },
  primaryButtonText: {
    color: "#0B1020",
    fontSize: 16,
    fontWeight: "800"
  },
  loadingContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  ticket: {
    marginTop: 18,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 22,
    overflow: "hidden"
  },
  ticketHeader: {
    alignItems: "center"
  },
  ticketTitle: {
    color: "#0B1020",
    fontSize: 24,
    fontWeight: "900",
    letterSpacing: 2
  },
  ticketSubtitle: {
    color: "#536078",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.4,
    marginTop: 5
  },
  ticketLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#DDE2EC",
    marginVertical: 18
  },
  ticketRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 18,
    marginBottom: 14
  },
  ticketLabel: {
    color: "#68728A",
    fontSize: 13
  },
  ticketValue: {
    color: "#111827",
    fontSize: 14,
    fontWeight: "700",
    flexShrink: 1,
    textAlign: "right"
  },
  ticketThanks: {
    color: "#4E586D",
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
    marginBottom: 18
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#0B1020",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center"
  },
  secondaryButtonText: {
    color: "#0B1020",
    fontWeight: "800",
    fontSize: 14
  }
});