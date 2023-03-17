import Layout from "@/components/template/Layout"
import useAppData from "@/data/hook/useAppData"
export default function Notifications() {
  const ctx = useAppData()

  return (
    <Layout title="Notificações" subtitle="gerencie suas notificações"  >
      <button onClick={ctx.changeTheme}>Alterar Tema</button>
    </Layout>
  )
}