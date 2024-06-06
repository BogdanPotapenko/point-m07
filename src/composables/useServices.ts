import { ref, onMounted } from "vue";

export function useServices() {
  const isLoading = ref(true);
  const data = ref();
  const error = ref(undefined);

  onMounted(() => setTimeout(() => fetchData()));

  const fetchData = async () => {
    if (!isLoading.value) {
      isLoading.value = true;
    }
    try {
      const response = await fetch("/point-m07/data.json");

      const result = await response.json();

      data.value = result.services;
    } catch {
      console.log("no results");
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    data,
    error,
    refetch: fetchData,
  };
}
