import SuccessScreen from "@/components/SuccessScreen";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Success() {
  const router = useRouter();
  const { title, backTo } = useLocalSearchParams<{
    title?: string;
    backTo?: string;
  }>();

  return (
    <SuccessScreen
      title={title ?? "Success"}
      onFinished={() => {
        if (backTo) {
          router.replace(backTo as any);
        } else {
          router.back();
        }
      }}
    />
  );
}
