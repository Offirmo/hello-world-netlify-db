// https://app.fauna.com/documentation/howto/crud
const faunadb = require('faunadb')

const q = faunadb.query


const DB_NAME = 'hello-world-db'

async function main() {
	const client_admin = new faunadb.Client({ secret: process.env.FAUNADB_SECRET })

	client_admin.query(
		q.create_database({
			name: "production",
			priority: 88
		})
	)
	client_admin.query(
		q.create_database({
			name: "development",
			priority: 5,
		})
	)


	const DB_PROD_KEY = await client_admin.query(
		q.create_key({
			"database": q.database("production"),
			"role": "admin"
		})
	)

	const server_key = await client_admin.query(
		q.CreateKey(
			{ database: q.Database(DB_NAME), role: 'server' }
		)
	)

	console.log('server key:', server_key)

	const client = new faunadb.Client({ secret: server_key.secret })

	let result

	result = await client.query(
		q.Create(
			q.Ref("classes/User"),
			{
				data: {
					name: 'toto',
				},
			},
		)
	)
	console.log(result)

	result = await client.query(
		q.Paginate(
			q.Match(
				q.Ref("indexes/all_User")
			)
		)
	)
	console.log(result)

}


/*

*/

main()
.catch(console.error)
