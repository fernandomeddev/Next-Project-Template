import Layout from "@/components/template/Layout"
import useAppData from "@/data/hook/useAppData"
export default function Settings() {
  const ctx = useAppData()
  return (
    <Layout title="Configurações" subtitle="gerencie suas configurações"  >
      setting....
    </Layout>
  )
}