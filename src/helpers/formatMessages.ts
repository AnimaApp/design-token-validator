import { Message } from "../messages.js";
import { ParialRecord } from "../types.js";

type FormattedMessage = Omit<Message, "message"> & {
  messages: string[];
};

export type FormattedMessages = ParialRecord<
  FormattedMessage["key"],
  FormattedMessage
>;

export const formatMessages = (messages: Message[]): FormattedMessages => {
  const formattedMessages: FormattedMessages = {};

  messages.forEach((m) => {
    if (!formattedMessages[m.key]) {
      formattedMessages[m.key] = {
        key: m.key,
        label: m.label,
        reference: m.reference,
        messages: [],
      };
    }

    formattedMessages[m.key]?.messages.push(m.message);
  });

  return formattedMessages;
};
