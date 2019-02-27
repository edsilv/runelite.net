import { h } from 'preact'
import '@gouch/to-title-case'
import { toMMSS } from '../../util'
import { bindActionCreators } from 'redux'
import { fetchConfig, getBossLog, getSlayerTask } from '../../modules/config'
import { connect } from 'preact-redux'
import { fetchReleases } from '../../modules/git'
import prepare from '../../components/prepare'

const buildSlayerTask = slayerTask => {
  if (!slayerTask.hasTask) {
    return <noscript />
  }

  return (
    <div class="card mb-3">
      <div class="card-header">
        <img class="icon-small" alt="" src="/img/skillicons/slayer.png" />{' '}
        Slayer Task
      </div>
      <div class="card-body d-flex w-100">
        <div class="d-block">
          <h5 class="card-title">
            {slayerTask.name.toTitleCase()}{' '}
            <span class="badge badge-info">
              {slayerTask.start - slayerTask.remaining}/{slayerTask.start}
            </span>
          </h5>
          {slayerTask.location ? (
            <h6 class="card-subtitle text-muted">in {slayerTask.location}</h6>
          ) : (
            <noscript />
          )}
        </div>

        <div class="ml-auto text-right">
          Streak: <span class="badge badge-secondary">{slayerTask.streak}</span>
          <br />
          Points: <span class="badge badge-secondary">{slayerTask.points}</span>
        </div>
      </div>
    </div>
  )
}

const buildBossLog = bossLog => {
  if (bossLog.length === 0) {
    return <noscript />
  }

  return (
    <div class="card border-0">
      <div class="card-header border">
        <img class="icon-small" alt="" src="/img/skillicons/attack.png" /> Boss
        Log
      </div>
      <ul class="list-group list-group-small">
        {bossLog.map(e => (
          <li class="list-group-item">
            {e.name.toTitleCase()}{' '}
            <div class="float-right">
              Kills: <span class="badge badge-primary badge-pill">{e.kc}</span>{' '}
              {e.pb ? (
                <span>
                  Personal best:{' '}
                  <span class="badge badge-info badge-pill">
                    {toMMSS(e.pb)}
                  </span>
                </span>
              ) : (
                <noscript />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Home = ({ slayerTask, bossLog }) => (
  <div>
    {buildSlayerTask(slayerTask)}
    {buildBossLog(bossLog)}
  </div>
)

const mapStateToProps = (state, props) => ({
  ...props,
  slayerTask: getSlayerTask(state),
  bossLog: getBossLog(state)
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchReleases,
      fetchConfig
    },
    dispatch
  )

const prepareComponentData = async ({ fetchReleases, fetchConfig }) => {
  await fetchReleases()
  await fetchConfig()
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(prepare(prepareComponentData)(Home))
